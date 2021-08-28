const express = require('express')

const {productRouter} = require('./routes/productRouter')
const {authRouter} = require('./routes/authRouter');
const { checkUser } = require('./middlewares/authMiddleware');
const app = express();

app.use(express.urlencoded({extended: true})) 
app.use(express.json({extended: true}))

app.use('/api/products', checkUser, productRouter)
app.use('/auth', authRouter)

app.listen(3000, () => console.log('Server is running on port 3000...'))

// localhost:3000/auth/login`