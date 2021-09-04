const {Router} = require('express')

const {createUser} = require('../contollers/userController')

const router = Router()

router.post('/', createUser)

module.exports = {
  userRouter: router
}