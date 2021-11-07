import Product from '../models/productSchema.js'

export const getProducts = async (req, res) => {
    try{
       const Products = await Product.find({});
       res.json(Products);
    }
    catch(error){
        console.log(error);
    }
};


export const getProductById = async(req, res) =>{
    try{
       const product = await Product.findOne({'id': req.params.id});
       res.json(product);
    }
    catch(error){
        console.log(error)
    }

}