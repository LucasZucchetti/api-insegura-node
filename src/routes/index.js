import express from "express";
import userRoutes from "./userRoutes.js";

const router = express.Router();

router.use("/usuarios", userRoutes);

router.get("/", (req, res) => {
    res.json({
        mensagem: "API funcionando."
    });
});

export default router;