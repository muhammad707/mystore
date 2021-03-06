let products = require('../data.json')
const {writeDataToFile} = require('../utils')
const {v4: uuid} = require('uuid')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

function findById(id) {
  return new Promise((resolve, request) => {
    const product = products.find((p) => p.id === id)
    resolve(product)
  })
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = {
      id: uuid(),
      ...product
    }
    products.push(newProduct)
    writeDataToFile('./data.json', products)
    resolve(newProduct)
  })
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex(p => p.id === id)
    products[index] = { id, ...product }
    writeDataToFile('./data.json', products)
    resolve(products[index])
  })
}

function deleteProduct(id) {
  return new Promise((resolve, reject) => {
    products = products.filter(p => p.id !== id)
    writeDataToFile('./data.json', products)
    resolve()
  })
}

module.exports = {
  getProducts: findAll,
  getProduct: findById,
  createProduct: create,
  updateProduct: update,
  deleteProduct
}