const Product = require('../models/product.model')
const User = require('../models/user.model')
const respon = require('../helper/responJson');


class CartServ{
    async addCart(body){
        let result = 'ok';
        try {
            // console.log(1);
            // let userss = await User.findOne({name:"dummy"})
            // console.log(userss)
            // const newProduct = new Product({ 
            //     name : body.name,
            //     price : body.price,
            //     description : body.description,
            //     quantity : body.quantity,
            //     userId : userss._id,
            // });
            // let data = await Product.create(newProduct)
            // let responseTemplate = new respon(200,"Success Create Product",data)
            // result = JSON.stringify(responseTemplate,null,2)
            // result = data
        } catch (error) {
            throw new Error(error)
        }
        return result
    }
    async findAllCart(){
        let result;
        try {
            let data = await Product.find().populate('userId')
            let responTemplate = new respon(200,"Success",data)
            result = JSON.stringify(responTemplate,null,2)
        } 
        catch (error) {
            throw new Error(error)
        }
        return result
    }

}

module.exports = CartServ;