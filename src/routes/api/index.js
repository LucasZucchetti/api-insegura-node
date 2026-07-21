import express from "express";
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes.js";
import meRoutes from "./meRoutes.js";

const router = express.Router();

router.use("/usuarios", userRoutes);
router.use("/auth", authRoutes);
router.use("/me", meRoutes);

export default router;
