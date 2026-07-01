const express = require("express");

const router = express.Router();

const userRoutes = require("./userRoutes");

router.use("/usuarios", userRoutes);

router.get("/", (req,res)=>{
    res.json({
        mensagem:"API funcionando."
    });
});

module.exports = router;