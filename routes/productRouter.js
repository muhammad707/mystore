const {Router} = require('express')

const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../contollers/productContoller')

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = {
  productRouter: router
}