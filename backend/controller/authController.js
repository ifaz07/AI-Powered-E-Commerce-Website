import validator from "validator";
import bcrypt from "bcryptjs";
import User from "../model/userModel.js";
import { generateToken } from "../config/token.js";
import { verifyGoogleIdToken } from "../config/firebaseAdmin.js";

const isProduction = process.env.NODE_ENV === "production";

const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// Only send safe fields to the browser. Never the password hash.
const publicUser = (user) => ({
    _id: user._id,
    name: user.name,
    email: user.email,
});

// Hide internal error details from users in production.
const serverError = (res, message, error) => {
    console.error(message, error.message);
    return res.status(500).json({
        message,
        ...(isProduction ? {} : { error: error.message }),
    });
};

// Logs the user in: sets the login cookie and sends back the safe user fields.
const startSession = (res, user, status, message) => {
    res.cookie("token", generateToken(user), cookieOptions);
    return res.status(status).json({ message, user: publicUser(user) });
};

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Reject anything that is not a plain string (blocks NoSQL injection like { "$gt": "" }).
        if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            return res.status(400).json({ message: "Name, email and password are required" });
        }

        const cleanName = name.trim();
        const cleanEmail = email.trim().toLowerCase();

        if (!cleanName) {
            return res.status(400).json({ message: "Name is required" });
        }
        if (!validator.isEmail(cleanEmail)) {
            return res.status(400).json({ message: "Enter a valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters" });
        }

        const existUser = await User.findOne({ email: cleanEmail });
        if (existUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name: cleanName,
            email: cleanEmail,
            password: hashedPassword,
        });

        return startSession(res, newUser, 201, "User registered successfully");
    } catch (error) {
        // Two sign-ups with the same email at the same moment.
        if (error.code === 11000) {
            return res.status(409).json({ message: "User already exists" });
        }
        return serverError(res, "Register failed", error);
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (typeof email !== "string" || typeof password !== "string") {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email: email.trim().toLowerCase() });
        // Same message for "no such user", "Google-only account" and "wrong password"
        // so attackers cannot find out which emails are registered.
        const isMatch = user?.password ? await bcrypt.compare(password, user.password) : false;
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        return startSession(res, user, 200, "User logged in successfully");
    } catch (error) {
        return serverError(res, "Login failed", error);
    }
};

// Google sign-in. The browser sends the Firebase ID token it got from Google.
// We verify that token ourselves and never trust an email or name sent by the browser.
export const googleLogin = async (req, res) => {
    try {
        const { idToken } = req.body;
        if (typeof idToken !== "string" || !idToken) {
            return res.status(400).json({ message: "Google sign-in token is required" });
        }

        let decoded;
        try {
            decoded = await verifyGoogleIdToken(idToken);
        } catch (error) {
            // "auth/..." codes mean the token itself is bad (expired, forged, wrong project).
            if (typeof error.code === "string" && error.code.startsWith("auth/")) {
                return res.status(401).json({ message: "Google sign-in failed. Please try again." });
            }
            throw error; // a setup problem (missing env var, package) is a server error
        }

        const email = decoded.email?.trim().toLowerCase();
        const isGoogleAccount = decoded.firebase?.sign_in_provider === "google.com";
        if (!email || !decoded.email_verified || !isGoogleAccount) {
            return res.status(401).json({ message: "Google sign-in failed. Please try again." });
        }

        let user = await User.findOne({ email });
        let status = 200;

        if (!user) {
            try {
                user = await User.create({
                    name: decoded.name?.trim() || email.split("@")[0],
                    email,
                    authProvider: "google",
                });
                status = 201;
            } catch (error) {
                // Two Google sign-ins for a new email at the same moment: use the one that won.
                if (error.code !== 11000) throw error;
                user = await User.findOne({ email });
            }
        }
        // An existing email/password account with the same email is signed in too. That is safe
        // because Google has verified the person owns this email address.

        return startSession(res, user, status, "Signed in with Google");
    } catch (error) {
        return serverError(res, "Google sign-in failed", error);
    }
};

// Returns the logged-in user. The frontend calls this on page load to restore the session.
export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            // The account was deleted but the cookie is still valid.
            res.clearCookie("token", { httpOnly: true, secure: isProduction, sameSite: "strict" });
            return res.status(401).json({ message: "Not authenticated" });
        }
        return res.status(200).json({ user: publicUser(user) });
    } catch (error) {
        return serverError(res, "Could not load user", error);
    }
};

export const logoutUser = async (req, res) => {
    try {
        res.clearCookie("token", { httpOnly: true, secure: isProduction, sameSite: "strict" });
        return res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        return serverError(res, "Logout failed", error);
    }
};
