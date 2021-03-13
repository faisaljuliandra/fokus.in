const express = require('express')
const verifyRole = require('../middleware/roleMiddleware')
const UserProgressMilestoneController = require('../controllers/userProgressMilestoneController')
const passport = require('../middleware/passportMiddleware')
const userProgressMilestone = new UserProgressMilestoneController()
const restrict = passport.authenticate('jwt', {
    session: false
}) 
const app = express.Router()
app.get('/', restrict, verifyRole('admin'), async (req, res, next) => {
    const { query } = req
    const result = await userProgressMilestone.findUserGoals({
        ...query
    }).catch(next)
    res.send(result)
})
app.get('/myProgress', restrict, async (req, res, next) => {
    try {
        const { user, goal } = req.query
        const userGoalsDisplay = await userProgressMilestone.findUserGoals(user, goal)
        if (userGoalsDisplay.length == 0) {
            return res.status(303).json({
                message: 'Milestone is empty! Please check another milestone',
            })
        } else if (userGoalsDisplay) {
            const totalMilestone = userGoalsDisplay.length
            const result = userGoalsDisplay.filter(function(data) {
                return data.isFinished == true
            })
            const message = ({
                count: `You have done ${result.length} of ${totalMilestone} milestones`,
                data: result
            })
            res.send(message)
        }
    } catch (err) {
        next(err);
    }
})
app.post('/', restrict,  async (req, res) => {
    const { body } = req
    const result = await userProgressMilestone.add({
        ...body
    })
    res.send(result)
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