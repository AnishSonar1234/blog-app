import express from "express";
const router = express.Router();

router.get('/about', (req, res) => {
    res.render('about');            
}).post('/about', (req, res) => {
    res.redirect("/about")                
});

export default router;