const express = require('express')
const CategoryController = require('../controller/categoryController')
const passport = require('../middleware/passportMiddleware')
const verifyRole = require('../middleware/roleMiddleware')

const category = new CategoryController()
const restrict = passport.authenticate('jwt', { 
    session: false
})
const app = express.Router()

app.get('/', async (req, res) => {
    const { query } = req
    res.send(await category.get({
        ...query
    }))
})

app.post('/', async (req, res) => {
    const { body } = req
    res.send(await category.add({
        ...body
    }))
})

module.exports = app