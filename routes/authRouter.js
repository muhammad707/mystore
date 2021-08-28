const {Router} = require('express')

const {login} = require('../contollers/authController')

const router = Router()

router.post('/login', login)

module.exports = {
  authRouter: router
}