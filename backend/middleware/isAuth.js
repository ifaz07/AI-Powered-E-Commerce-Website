import jwt from "jsonwebtoken";


const isAuth = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        return next();
    } catch {
        // Expired, tampered with, or signed with a different secret.
        return res.status(401).json({ message: "Session expired. Please log in again." });
    }
};

export default isAuth;
