const express = require('express')
const CategoryController = require('../controllers/categoryController')
const passport = require('../middleware/passportMiddleware')

const category = new CategoryController()
const restrict = passport.authenticate('jwt', { 
    session: false
})
const app = express.Router()


app.get('/', restrict, async (req, res) => {
    const { query } = req
    res.send(await category.get({
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const { body } = req
    res.send(await category.add({
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const { body, params } = req
    await category.edit(params.id, body)
    res.send('OK')
})

app.delete('/:id', restrict, async (req, res) => {
    const { params } = req
    await category.remove(params.id)
    res.send('OK')
})

module.exports = app