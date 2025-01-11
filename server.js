import express from "express";
import path from "path";
import mongoose from "mongoose";
import rouHome from "./routes/home.js";
import rouAbout from "./routes/about.js";
import rouCreate from "./routes/create.js";
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/todo")
const db = mongoose.connection;
db.on('eror',()=>{
    console.log("Err is ");
})
db.once('open',()=>{
    console.log("Connected");
})

app.set('view engine', 'ejs');

app.use(express.static(path.join(path.resolve(),"public")));             //middleware
app.use(express.urlencoded({extended:true}));
app.use("/",rouHome);
app.use("/",rouAbout);
app.use("/",rouCreate);


app.listen(4000, () => console.log('Example app listening on port 4000!'));