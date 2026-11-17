import express from "express";
import { getCurrentUser, googleLogin, loginUser, logoutUser, registerUser } from "../controller/authController.js";
import isAuth from "../middleware/isAuth.js";

const authRoutes = express.Router();

authRoutes.post("/registration", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/google", googleLogin);
authRoutes.post("/logout", logoutUser);
authRoutes.get("/me", isAuth, getCurrentUser);

export default authRoutes;
