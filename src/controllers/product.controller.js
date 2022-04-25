const addNewProduct = async(req,res,service)=>{
    try {
        const body = req.body;
        const product = await service.addProduct(body)
        res.send(product)
    } catch (e) {
        res.sendStatus(500);
    }
}

const getProduct = async(req,res,service)=>{
    try {
        let product = await service.findAllProduct();
        // if(req.params.id){
        //     product = await service.findByID(req.params.id)
        // }
        // else if(req.query.name || req.query.email || req.query.page || req.query.limit){
        //     product = await service.searchQuery(req.query)
        // }
        // else{
        //     product = await service.findAllProduct()
        // }
        res.send(product)
    } catch (e) {
        res.sendStatus(500)
    }
}

const updateProduct = async(req,res,service)=>{
    try {
        const body = req.body;
        const product = await service.editProduct(body)
        res.send(product)
    } catch (e) {
        res.sendStatus(500);
    }
}

const removeProduct = async(req,res,service)=>{
    try {
        const body = req.body;
        const product = await service.deleteProduct(body)
        res.send(product)
    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = { addNewProduct,getProduct,updateProduct,removeProduct };