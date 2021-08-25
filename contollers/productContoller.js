const Product = require('../models/productModel')

async function getProducts(req, res) {
  try {
    const products = await Product.getProducts()
    res.send(products)
  } catch(error) {

  }
}

async function getProduct(req, res) { // /api/product/1
  const {id} = req.params;
  const product = await Product.getProduct(id)
  if (!product) {
    res.status(404).send({
      message: 'Product not found'
    })
  } else {
    res.send(product)
  }
}

module.exports = {
  getProducts,
  getProduct
}