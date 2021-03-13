const express = require('express')
const MotivationController = require('../controllers/motivationController')
const motivation = new MotivationController()
const passport = require('../middleware/passportMiddleware')
const verifyRole = require('../middleware/roleMiddleware')
const restrict = passport.authenticate('jwt', { session: false })
const app = express.Router()

app.get('/', async (req, res) => {
    const { query } = req
    res.send(await motivation.get({
        ...query
    }))
})

app.post('/', restrict, verifyRole('admin'), async (req, res, next) => {
    const { body } = req
    const result = await motivation.add({
    ...body
    }).catch(next)
    res.send(result)
})

app.put('/:id', restrict, verifyRole('admin'), async (req, res) => {
    const { body, params } = req
    await motivation.edit(params.id, body)
    res.send('Edit done')
})

app.delete('/:id', restrict, verifyRole('admin'), async (req, res) => {
    const { params } = req
    await motivation.remove(params.id)
    res.send('Delete done')
})

module.exports = app