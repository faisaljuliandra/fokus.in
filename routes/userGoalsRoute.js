const express = require('express')
const UserGoalsController = require('../controllers/userGoalsController')
const passport = require('../middleware/passportMiddleware')

const userGoals = new UserGoalsController()
const restrict = passport.authenticate('jwt', {
    session: false
}) 
const app = express.Router()

app.get('/', restrict, async (req, res) => {
    const { query } = req
    res.send(await userGoals.get({
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const { body } = req
    res.send(await userGoals.add({
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const { body, params } = req
    await userGoals.edit(params.id, body)
    res.send('OK')
})

app.delete('/:id', restrict, async (req, res) => {
    const { params } = req
    await userGoals.remove(params.id)
    res.send('OK')
})

module.exports = app