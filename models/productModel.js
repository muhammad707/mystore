const products = require('../data.json')
const {v4: uuid} = require('uuid')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

module.exports = {
  getProducts: findAll
}