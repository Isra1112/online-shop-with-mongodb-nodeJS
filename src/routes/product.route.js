const express = require('express');
const router = express.Router();
// const User = require('../models/index.model')
const ProductService = require('../services/product.service')
const {addNewProduct,getProduct,updateProduct,removeProduct} = require('../controllers/product.controller');
const verifyToken = require('../middlewares/auth-token');
const productService = new ProductService();


// router.use(verifyToken)
router.get('/',(req,res,next)=>getProduct(req,res,productService))
// router.get('/:id',(req,res,next)=>getUser(req,res,userService))
router.post('/',(req,res,next)=>addNewProduct(req,res,productService))
router.put('/',(req,res,next)=>updateProduct(req,res,productService))
router.delete('/',(req,res,next)=>removeProduct(req,res,productService))


module.exports = router;
