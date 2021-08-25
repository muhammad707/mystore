const express = require('express')
const uuid = require('uuid')
const fs = require('fs')

const products = require('./data.json')
const {getProducts, getProduct, createProduct, updateProduct} = require('./contollers/productContoller')
const app = express();

app.use(express.urlencoded({extended: true})) 
app.use(express.json({extended: true}))

// Get all products
app.get('/api/products', getProducts)

// Get product by id
app.get('/api/products/:id', getProduct)

// create product

app.post('/api/products', createProduct)

app.put('/api/products/:id', updateProduct)

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