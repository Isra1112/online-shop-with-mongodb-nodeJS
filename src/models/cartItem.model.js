const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const CartItemSchema = new Schema({
    cartId:{
        type: Schema.Types.ObjectId,
        ref:'Cart'
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref:'Product'
    },
    qty:{
        type: Number,
        required:true
    },   
    price:{
        type:Number,
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


const cartItem = mongoose.model("CartItem",CartItemSchema)
module.exports = cartItem;