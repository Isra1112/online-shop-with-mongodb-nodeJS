const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});


const product = mongoose.model("Product",ProductSchema)
module.exports = product;