import productModel from '../models/product.js'

const productCreate = async(req,res) =>{

    try {
        let product = await productModel.findOne({productcode:req.body.productcode}) 
        if(!product){
            
            await productModel.create(req.body)
            res.status(202).send({
                message:"Product created successfully"
            })
        }
        else{
            res.status(400).send({
                message:`Product Code with ${req.body.productcode} already exists`
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}
const productEdit = async(req,res)=>{
    try {
        const productID = req.params.id
        if(productID)
        {
            const {producttype,productcode,producttitle,costperitem} = req.body
            let product = await productModel.findById(productID)
            product.producttype = producttype
            product.productcode = productcode
            product.producttitle = producttitle
            product.costperitem=costperitem
            
            await product.save()
            res.status(200).send({
                message:"Product Edited Successfully"
            })
        }
        else
        {
            res.status(400).send({message:"Product Id Not found"})
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}
const getAllProducts = async(req,res)=>{
    try {
        let product = await productModel.find({})
        res.status(200).send({
            message:"Product Fetched Successfully",
            product
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}


const getbyid = async(req,res)=>{
    try {
        const productId = await req.params.id
        if(productId){
        let product = await productModel.findById(productId)
        res.status(200).send({
            message:"Product Fetched Successfully",
            product
        })
    }
    else
    {
        res.status(400).send({message:"Product Id Not found"})
    }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}
export default{
    productCreate,
    productEdit,
    getAllProducts,
    getbyid
    
}