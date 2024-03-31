import express from 'express'
import userRoutes from './User.js'
import productRoutes from './product.js'
import sellRoutes from './sell.js'

const router = express.Router()

router.use('/user',userRoutes)
router.use('/product',productRoutes)
router.use('/sell',sellRoutes)

export default router