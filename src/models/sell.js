import mongoose from "./index.js"

const sellSchema = new mongoose.Schema({
    orderID :{type:Number,required:[true,"OrderID is Required"]},
    orderDate :{type:Date, default:Date.now()},
    customerName :{type:String,required:[true,"Customer Name is Required"]},
    customerMobile :{type:Number,required:[true,"Customer Mobile is Required"]},
    product :{type:String},
    quantity :{type:Number},
    Cost:{type:Number,default:1}
    

},{
    collection:'sell',
    versionKey:false
})

const sellModel = mongoose.model('sell',sellSchema)
export default sellModel