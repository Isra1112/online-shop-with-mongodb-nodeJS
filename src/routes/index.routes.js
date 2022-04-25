const express = require('express');
const router = express.Router();

//const modulRoute = require('./')
const authRoute = require('./auth.route');
const userRoute = require('./user.route')
const productRoute = require('./product.route')
const cartRoute = require('./cart.route')
const cartItemRoute = require('./cartItem.route')


router.use('/test',router.get('/',(req,res) => (req,console.log("test route"))))
router.use('/auth',authRoute);
router.use('/user',userRoute)
router.use('/product',productRoute)
router.use('/cart',cartRoute)
router.use('/cartItem',cartItemRoute)


module.exports = router;