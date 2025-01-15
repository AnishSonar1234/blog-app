import express from "express";
import path from "path";
import mongoose from "mongoose";
import rouHome from "./routes/home.js";
import rouAbout from "./routes/about.js";
import rouCreate from "./routes/create.js";
const app = express();

app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://anishsonar283:dark2d2x@blog-data.w04d7.mongodb.net/data")

app.use(express.static(path.join(path.resolve(),"public")));             //middleware
app.use(express.urlencoded({extended:true}));
app.use("/",rouHome);
app.use("/",rouAbout);
app.use("/",rouCreate);


app.listen(4000, () => console.log('Example app listening on port 4000!'));