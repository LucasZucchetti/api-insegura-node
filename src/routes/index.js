import express from "express";

import apiRoutes from "./api/index.js";
import labRoutes from "./lab/index.js";

const router = express.Router();

router.use("/api", apiRoutes);

router.use("/lab", labRoutes);

router.get("/", (req, res) => {
    res.json({
        application: "API Insegura Node",
        version: "1.0.0",
        documentation: "/docs"
    });
});

export default router;