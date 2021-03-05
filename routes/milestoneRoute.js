const express = require('express')
const MilestoneController = require('../controllers/milestoneController')
const passport = require('../middleware/passportMiddleware')

const milestone = new MilestoneController()
const restrict = passport.authenticate('jwt', { 
    session: false
})
const app = express.Router()

app.get('/', restrict, async (req, res) => {
    const { query } = req
    res.send(await milestone.get({
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const { body } = req
    res.send(await milestone.add({
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const { body, params } = req
    await milestone.edit(params.id, body)
    res.send('OK')
})

app.delete('/:id', restrict, async (req, res) => {
    const { params } = req
    await milestone.remove(params.id)
    res.send('OK')
})

module.exports = app