const express = require('express')
const GoalsController = require('../controllers/goalsController')
const CategoryController = require('../controllers/categoryController')
const passport = require('../middleware/passportMiddleware')
const verifyRole = require('../middleware/roleMiddleware')
const { Op, Sequelize } = require('sequelize');

const goals = new GoalsController()
const restrict = passport.authenticate('jwt', { 
    session: false
})
const app = express.Router()

app.get('/', restrict, async (req, res, next) => {

    try {
        const { category } = req.query
        const goalsDisplay = await goals.findCategory(category)
        console.log(goalsDisplay);
        if (goalsDisplay.length == 0) {
            return res.status(303).json({
                message: 'The goal is empty! Please check another category',
            })
            
        } else {
            return res.status(200).send(goalsDisplay)
        }
        
    } catch (err) {
        next(err);
    }
})

app.post('/', restrict, verifyRole('admin'), async (req, res, next) => {

    try {
        const { categoriesId, namaGoal, deskripsiGoal, estimationTime } = req.body
        const goalAdd = await goals.add({
            categoriesId,
            namaGoal,
            deskripsiGoal,
            estimationTime
        })
        res.status(201).json({
            success: true,
            message: 'Succesfully add goals',
            data: goalAdd
        })
    } catch (err) {
        next(err)
    }
})

app.put('/:id', restrict, verifyRole('admin'), async (req, res) => {
    const { body, params } = req
    await goals.edit(params.id, body)
    res.send('Successfully edited!')
})

app.delete('/:id', restrict, verifyRole('admin'), async (req, res) => {
    const { params } = req
    await goals.remove(params.id)
    res.send('Successfully deleted!')
})

module.exports = app