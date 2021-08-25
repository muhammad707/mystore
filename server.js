const express = require('express')

const {productRouter} = require('./routes/productRouter')
const app = express();

app.use(express.urlencoded({extended: true})) 
app.use(express.json({extended: true}))

app.use('/api/products', productRouter)

app.listen(3000, () => console.log('Server is running on port 3000...'))