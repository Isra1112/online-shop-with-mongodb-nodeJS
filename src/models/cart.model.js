const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const CartSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    totalQty:{
        type: Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    }
});


const cart = mongoose.model("Cart",CartSchema)
module.exports = cart;