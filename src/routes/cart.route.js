const express = require('express');
const router = express.Router();
// const User = require('../models/index.model')
const CartService = require('../services/Cart.service')
const { addNewCart,getCart} = require('../controllers/Cart.controller');
const verifyToken = require('../middlewares/auth-token');
const cart = new CartService();


// router.use(verifyToken)
router.get('/',(req,res,next)=>getCart(req,res,cart))
// router.get('/:id',(req,res,next)=>getUser(req,res,userService))
router.post('/',(req,res,next)=>addNewCart(req,res,cart))
// router.put('/',(req,res,next)=>updateProduct(req,res,cart))
// router.delete('/',(req,res,next)=>removeProduct(req,res,cart))


module.exports = router;
