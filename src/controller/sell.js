import sellModel from "../models/sell.js"
import productModel from "../models/product.js"


const create = async(req,res) =>{

    try {
        let sell = await sellModel.findOne({orderID:req.body.orderID}) 
        if(!sell){
            
            await sellModel.create(req.body)
            res.status(202).send({
                message:"Sell created successfully"
            })
        }
        else{
            res.status(400).send({
                message:`OrderID with ${req.body.orderID} already exists`
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}
const productsell = async(req,res)=>{
    try {
        const blogId = req.params.id
        if(blogId){
   
        const product=req.body.product
        const quantity=req.body.quantity
        let sell = await sellModel.findOne({customerName:req.body.customerName})
        let sellprd = await productModel.findOne({producttitle:product})
        sell.product=product
        sell.quantity=quantity
        const cst = (sell.quantity) * (sellprd.costperitem)
        sell.Cost = cst
        await sell.save()
        res.status(200).send({
            message:"Sell Edited Successfully"
        })
    }
    else{
        {
            res.status(400).send({message:"Sell Id Not found"})
        }
    }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}
const getbyorderid = async(req,res)=>{
    try {
        const sellId = await req.params.id
        if(sellId){
        let sell = await sellModel.findById(sellId)
        res.status(200).send({
            message:"Sell Fetched Successfully",
            sell
        })
    }
    else
    {
        res.status(400).send({message:"Sell Id Not found"})
    }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}
const getAll = async(req,res)=>{
    try {
        let sell = await sellModel.find({})
        res.status(200).send({
            message:"Product Fetched Successfully",
            sell
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

const getbyCustomer = async(req,res)=>{
    try {
        const Name = req.body.customerName
        if(Name){
            let sell = await sellModel.find({customerName:Name})
        res.status(200).send({
            message:"Sell Fetched Successfully",
            sell
        })
    }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}
export default{
    create,
    productsell,
    getbyorderid,
    getAll,
    getbyCustomer
}