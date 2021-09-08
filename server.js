const express = require('express')

const {productRouter} = require('./routes/productRouter')
const {authRouter} = require('./routes/authRouter');
const {userRouter} = require('./routes/userRouter')
const { checkUser } = require('./middlewares/authMiddleware');
const {checkPermission} = require('./middlewares/permissionMiddleware')
const app = express();

app.use(express.urlencoded({extended: true})) 
app.use(express.json({extended: true}))

app.use('/api/products', checkUser, checkPermission('seller'), productRouter)
app.use('/api/user', checkUser, checkPermission('admin'), userRouter)
app.use('/auth', authRouter)

app.listen(3000, () => console.log('Server is running on port 3000...'))

// localhost:3000/auth/login`

// 1 - admin 2 - moderator