const express = require('express')
const MilestoneController = require('../controller/milestoneController')
const passport = require('../middleware/passportMiddleware')
const verifyRole = require('../middleware/roleMiddleware')

const milestone = new MilestoneController()
const restrict = passport.authenticate('jwt', { 
    session: false
})
const app = express.Router()

app.get('/', restrict, async (req, res, next) => {
    try {
        const { goal } = req.query
        const milestoneDisplay = await milestone.findGoal(goal)
        if (milestoneDisplay.length == 0) {
            return res.status(303).json({
                message: 'The milestone is empty! Please check another goals',
            })
            
        } else {
            return res.status(200).send(milestoneDisplay)
        }
        
    } catch (err) {
        next(err);
    }
})

app.post('/', restrict, verifyRole('admin'), async (req, res) => {
    const { body } = req
    res.send(await milestone.add({
        ...body
    }))
})

app.put('/:id', restrict, verifyRole('admin'), async (req, res) => {
    const { body, params } = req
    await milestone.edit(params.id, body)
    res.send('Milestone successfully edited!')
})

app.delete('/:id', restrict, verifyRole('admin'), async (req, res) => {
    const { params } = req
    await milestone.remove(params.id)
    res.send('Milestone successfully deleted!')
})

module.exports = app