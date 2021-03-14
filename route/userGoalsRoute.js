const express = require('express')
const userGoalsController = require('../controllers/usergoalcontroller')
const passport = require('../middleware/passportMiddleware')
const verifyRole = require('../middleware/roleMiddleware')

const userGoal = new userGoalsController()
const restrict = passport.authenticate('jwt', { 
    session: false
})
const app = express.Router()

//Get user goals data based on user id and goal id 
app.get('/show', restrict,  async (req, res, next) => {
    try {
        const { user, goal } = req.query
        const userGoalsDisplay = await userGoal.findGoalsByUserId(user, goal)
        if (userGoalsDisplay.length == 0) {
            return res.status(303).json({
                message: `User hasn't take the goal yet! Try to add the new goal!`,
            })
            
        } else {
            return res.status(200).send(userGoalsDisplay)
        }
    } catch (err) {
        next(err)
    }
})

app.get('/topGoals', restrict, async (req, res, next) => {
    try {
        // console.log("Sebelum user goal tampil");
        // console.log(userGoal);
        const userGoalsDisplay = await userGoal.countTopGoals()
        console.log("hasil: ", userGoalsDisplay);
        res.send(userGoalsDisplay)

    } catch (err) {
        next(err);
    }
})

app.post('/add', restrict, async (req, res, next) => {
    try {
        const { userId, goalsId, startGoal, endGoal, isEnrolled } = req.body
        const userGoalsData = await userGoal.add({
            userId,
            goalsId,
            startGoal,
            endGoal,
            isEnrolled
        })
        res.status(201).json({
            success: true,
            message: 'Succesfully store the user goals data',
            data: userGoalsData
        })
    } catch (err) {
        next(err)
    }
})

app.put('/:id', restrict,  async (req, res) => {
    const { body, params } = req
    await userGoal.edit(params.id, body)
    res.send('User Goals Data Successfully Edited!')
})

app.delete('/:id', restrict, verifyRole('admin'), async (req, res) => {
    const { params } = req
    await userGoal.remove(params.id)
    res.send('User Goals DataSuccessfully deleted!')
})

module.exports = app