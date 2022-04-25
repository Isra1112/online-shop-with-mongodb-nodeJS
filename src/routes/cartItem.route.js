const express = require('express');
const router = express.Router();
// const User = require('../models/index.model')
const CartItemService = require('../services/CartItem.service')
const { addNewCartItem,getCartItem} = require('../controllers/CartItem.controller');
const verifyToken = require('../middlewares/auth-token');
const cartItem = new CartItemService();


// router.use(verifyToken)
router.get('/',(req,res,next)=>addNewCartItem(req,res,cartItem))
// router.get('/:id',(req,res,next)=>getUser(req,res,userService))
router.post('/',(req,res,next)=>getCartItem(req,res,cartItem))
// router.put('/',(req,res,next)=>updateProduct(req,res,cartItem))
// router.delete('/',(req,res,next)=>removeProduct(req,res,cartItem))


module.exports = router;
