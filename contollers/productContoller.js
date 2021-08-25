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

async function createProduct(req, res) {
  const {name, description, price} = req.body
  const product = {
    name, 
    description,
    price
  }

  try {
    const newProduct = await Product.createProduct(product)
    res.send(newProduct)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct
}