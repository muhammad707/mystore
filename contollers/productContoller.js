const Product = require('../models/productModel')

async function getProducts(req, res) {
  try {
    const products = await Product.getProducts()
    res.send(products)
  } catch(error) {

  }
}

module.exports = {
  getProducts
}