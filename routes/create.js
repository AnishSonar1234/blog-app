import express from "express";
import mongoose from 'mongoose';
import { Data } from "../models/data.js";

const router = express.Router();

router.get('/create', (req, res) => {
    res.render('create');            
}).post('/create', (req, res) => {
    const n =  new Date();
    const y = n.getFullYear();
    const m = n.getMonth() + 1;
    const d = n.getDate();
    
    const h = n.getHours();
    const min = n.getMinutes();
    const s = n.getSeconds();

    const a = new Data({
        title: req.body.title,
        description: req.body.description,
        date: d + "/" + m + "/" + y,
        time: h + ":" + min + ":" + s,
    })
    a.save();
    res.redirect('/create');
});

export default router;
