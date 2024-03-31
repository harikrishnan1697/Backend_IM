import express from 'express'
import sellcontroller from '../controller/sell.js'

const router = express.Router()
router.post('/create',sellcontroller.create)
router.put('/sellproduct/:id',sellcontroller.productsell)
router.get('/get/:id',sellcontroller.getbyorderid)
router.get('/getall',sellcontroller.getAll)
router.get('/getbycustomername',sellcontroller.getbyCustomer)



export default router
