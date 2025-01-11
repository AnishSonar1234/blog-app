import express from "express";
import { Data } from "../models/data.js";
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await Data.find(); // Fetch data from the MongoDB collection
        res.render("home", { items });  // Pass data to the EJS template
    } catch (error) {
        res.status(500).send("Error fetching items");
    }
}).get('/home', (req, res) => {
    Data.find((err, docs) => {
        if (err) throw err;

        res.render('home', {
            data: docs
        });
    })
}).post('/home', async (req, res) => {
    res.render('/home');
}).get('/delete/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await Data.findByIdAndDelete(userId); // No callback, using async/await
        if (deletedUser) {
            res.redirect('/'); // Redirect after deletion
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}).get('/blogs/:id', async (req, res) => {
    try {
        const blog = await Data.findById(req.params.id);
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.render('blogs', { blog });
    } catch (err) {
        res.status(500).send('Error retrieving blog');
    }
}).get('/update/:id', async (req, res) => {
    try {
        const blog = await Data.findById(req.params.id);
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.render('update', { blog });
    } catch (err) {
        res.status(500).send('Error retrieving blog');
    }
}).post('/update/:id', async (req, res) => {
    try {
        const blog = await Data.findByIdAndUpdate(req.params.id, { title: req.body.title, description: req.body.description })
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.redirect('/')
    } catch (err) {
        res.status(500).send('Error retrieving blog');
    }
})

export default router;