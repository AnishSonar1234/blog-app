import express from "express";
import { Data } from "../models/data.js";
const router = express.Router();

router.get('/about', async (req, res) => {
    const count = await Data.countDocuments();
    res.render('about', { count });            
}).post('/about', (req, res) => {
    res.redirect("/about")                
});

export default router;