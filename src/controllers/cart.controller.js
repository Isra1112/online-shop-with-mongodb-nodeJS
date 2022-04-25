const addNewCart = async(req,res,service)=>{
    try {
        const body = req.body;
        const product = await service.addCart(body)
        res.send(product)
    } catch (e) {
        res.sendStatus(500);
    }
}

const getCart = async(req,res,service)=>{
    try {
        let product = await service.findAllCart();
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

module.exports = { addNewCart,getCart};