const express = require('express')
const uuid = require('uuid')
const fs = require('fs')

const products = require('./data.json')
const {getProducts, getProduct} = require('./contollers/productContoller')
const app = express();

app.use(express.urlencoded({extended: true})) 
app.use(express.json({extended: true}))

// Get all products
app.get('/api/products', getProducts)

// Get product by id
app.get('/api/products/:id', getProduct)

// create product

app.post('/api/products', (req, res) => {
  const {name, description, price} = req.body;

  const product = {
    id: uuid.v4(),
    name, // name: name
    description, // description: description
    price // price: price
  }

  products.push(product)  
  fs.writeFile('data.json', JSON.stringify(products, null, 2), 'utf-8', (err) => {
    if (err) {
      res.send({
        message: 'Error in creation'
      })
    } else {
      res.status(201).send({
        message: 'Product has been created'
      })
    }
  })
})

app.put('/api/products/:productId', (req, res) => {
  const {name, description, price} = req.body;
  const {productId} = req.params;

  const product = products.find(p => p.id === productId)

  if (!product) {
    res.send({
      message: 'Product not found'
    })
  } else {
    const newProduct = {
      name: name || product.name,
      description: description || product.description,
      price: price || product.price
    }

    const index = products.findIndex(p => p.id === productId)
    products[index] = {
      id: productId,
      ...newProduct
    }
    fs.writeFile('data.json', JSON.stringify(products, null, 2), 'utf-8', (err) => {
      if (err) {
        res.send({
          message: 'Error in creation'
        })
      } else {
        res.status(200).send({
          message: 'Product has been updated'
        })
      }
    })
  }
})

app.delete('/api/products/:productId', (req, res) => {
  const {productId} = req.params;
  const newProducts = products.filter(p => p.id !== productId)
  fs.writeFile('data.json', JSON.stringify(newProducts, null, 2), 'utf-8', (err) => {
    if (err) {
      res.send({
        message: 'Error in creation'
      })
    } else {
      res.status(200).send({
        message: 'Product has been deleted'
      })
    }
  })
})

app.listen(3000, () => console.log('Server is running on port 3000...'))