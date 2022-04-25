const Product = require('../models/product.model')
const User = require('../models/user.model')
const bcrypt = require("bcryptjs");
const respon = require('../helper/responJson');


class ProductServ{
    async addProduct(body){
        let result;
        try {
            console.log(1);
            let userss = await User.findOne({name:"dummy"})
            console.log(userss)
            const newProduct = new Product({ 
                name : body.name,
                price : body.price,
                description : body.description,
                quantity : body.quantity,
                userId : userss._id,
            });
            let data = await Product.create(newProduct)
            let responseTemplate = new respon(200,"Success Create Product",data)
            result = JSON.stringify(responseTemplate,null,2)
            // result = data
        } catch (error) {
            throw new Error(error)
        }
        return result
    }
    async findAllProduct(){
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

    async findByID(body){
        let result;
        try {
            let data = await Product.findById(body)
            let responTemplate = new respon(200,"Success",data)
            result = JSON.stringify(responTemplate,null,2)
        } 
        catch (error) {
            throw new Error(error)
        }
        return result
    }

    async searchQuery(query){
        let result;
        var regexQuery = {
            name: new RegExp(query.name, 'i'),
            email: new RegExp(query.email, 'i')
        };
        var pagging = {
            page: parseInt(query.page-1, 10) || 0,
            limit: parseInt(query.limit, 10) || 10
        }
        try {
            let data = await User.find(regexQuery)
            .skip(pagging.page * pagging.limit)
            .limit(pagging.limit)
            let responTemplate = new respon(200,"Success Search Product",data)
            responTemplate.page = pagging.page
            responTemplate.pageLimit = pagging.limit
            responTemplate.count = await User.countDocuments(regexQuery)
            result = JSON.stringify(responTemplate,null,2)
        } 
        catch (error) {
            throw new Error(error)
        }
        return result
    }

    async editProduct(body){
        let result;
        try {
            let data = await Product.findByIdAndUpdate(body._id,body,{new:true})
            let responseTemplate = new respon(200,"Success Update Product",data)
            result = JSON.stringify(responseTemplate,null,2)
        } 
        catch (error) {
            throw new Error(error)
        }
        return result
    }
    async deleteProduct(body){
        let result;
        try {
            let data = await Product.findByIdAndRemove(body._id)
            let responTemplate;
            if (data){
                responTemplate = new respon(200,"Success Delete Product",data)
            }
            else{
                responTemplate = new respon(201,"Not Found Product ID",data)
            }
            
            result = JSON.stringify(responTemplate,null,2)
        } 
        catch (error) {
            throw new Error(error)
        }
        return result
    }
}

module.exports = ProductServ;