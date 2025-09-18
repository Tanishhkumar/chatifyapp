import express from "express";

const router = express.Router();

router.get("/send",(req,res) =>{
    res.send("send mesage endpoint");
})

export default router;