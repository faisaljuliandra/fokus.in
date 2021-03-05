const express = require('express')
const UserCategoryController = require('../controllers/userCategoryController')
const passport = require('../middleware/passportMiddleware')

const userCategory = new UserCategoryController()
const restrict = passport.authenticate('jwt', {
    session: false
}) 
const app = express.Router()

app.get('/', restrict, async (req, res) => {
    const { query } = req
    res.send(await userCategory.get({
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const { body } = req
    res.send(await userCategory.add({
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const { body, params } = req
    await userCategory.edit(params.id, body)
    res.send('OK')
})

app.delete('/:id', restrict, async (req, res) => {
    const { params } = req
    await userCategory.remove(params.id)
    res.send('OK')
})

module.exports = app