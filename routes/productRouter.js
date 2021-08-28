const {Router} = require('express')

const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../contollers/productContoller')
const router = Router()

router.get('/', getProducts) // /api/products
router.get('/:id', getProduct) // /api/products/:id
router.post('/', createProduct) // /api/products
router.put('/:id', updateProduct) // /api/products/:id
router.delete('/:id', deleteProduct)
module.exports = {
  productRouter: router
}