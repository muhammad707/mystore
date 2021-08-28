const Product = require('../models/productModel')

async function getProducts(req, res) {
  console.log(req.user)
  try {
    const products = await Product.getProducts()
    res.send(products)
  } catch(error) {
    console.log(error)
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

async function updateProduct(req, res) {
  const {id} = req.params
  const {name, description, price} = req.body
  try {
    const product = await Product.getProduct(id)
    if (!product) {
      res.status(404).send({
        message: 'Product not found'
      })
    } else {
      const productData ={
        name: name || product.name,
        description: description || product.description,
        price: price || product.price
      }

      const updatedProduct = await Product.updateProduct(id, productData)
      res.send({
        message: 'Product updated successfully'
      })
    }
  } catch(error) {
    console.log(error)
  }
}

async function deleteProduct(req, res) {
  const {id} = req.params
  try {
    const product = await Product.getProduct(id)
    if (!product) {
      res.status(404).send({
        message: 'Product not found'
      })
    } else {
      await Product.deleteProduct(id)
      res.send({
        message: `Product ${id} removed`
      })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}