import mongoose from 'mongoose';
import slugify from 'slugify';

const DataSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required : true,
        unique: true
    }
})


DataSchema.pre('validate',function(next){
    if(this.title){
        this.slug = slugify(this.title,{lower:true,strict:true})
    }
    next()
})


export const Data = mongoose.model("Data",DataSchema);