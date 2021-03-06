const express = require('express')
const UserProgressMilestoneController = require('../controllers/userProgressMilestoneController')
const passport = require('../middleware/passportMiddleware')

const userProgressMilestone = new UserProgressMilestoneController()
const restrict = passport.authenticate('jwt', {
    session: false
}) 
const app = express.Router()

app.get('/', restrict, async (req, res) => {
    const { query } = req
    res.send(await userProgressMilestone.get({
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const { body } = req
    res.send(await userProgressMilestone.add({
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const { body, params } = req
    await userProgressMilestone.edit(params.id, body)
    res.send('OK')
})

app.delete('/:id', restrict, async (req, res) => {
    const { params } = req
    await userProgressMilestone.remove(params.id)
    res.send('OK')
})

module.exports = app