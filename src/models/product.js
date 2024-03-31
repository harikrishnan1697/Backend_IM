import mongoose from "./index.js"

const productSchema = new mongoose.Schema({
    producttype :{type:String,required:[true,"Product Type is Required"]},
    productcode :{type:Number,required:[true,"Product Code is Required"]},
    producttitle :{type:String,required:[true,"Product Title is Required"]},
    costperitem :{type:String,required:[true,"Product item is Required"]},  
},{
    collection:'product',
    versionKey:false
})

const productModel = mongoose.model('product',productSchema)
export default productModel