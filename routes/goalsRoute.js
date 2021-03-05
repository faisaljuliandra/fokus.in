const express = require('express')
const GoalsController = require('../controllers/goalsController')
const passport = require('../middleware/passportMiddleware')

const goals = new GoalsController()
const restrict = passport.authenticate('jwt', { 
    session: false
})
const app = express.Router()

app.get('/', restrict, async (req, res) => {
    const { query } = req
    res.send(await goals.get({
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const { body } = req
    res.send(await goals.add({
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const { body, params } = req
    await goals.edit(params.id, body)
    res.send('OK')
})

app.delete('/:id', restrict, async (req, res) => {
    const { params } = req
    await goals.remove(params.id)
    res.send('OK')
})

module.exports = app