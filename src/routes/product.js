import express from 'express'
import productcontroller from '../controller/product.js'


const router = express.Router()
router.post('/create',productcontroller.productCreate)
router.put('/edit/:id',productcontroller.productEdit)
router.get('/getproducts',productcontroller.getAllProducts)
router.get('/getproducts/:id',productcontroller.getbyid)

export default router
