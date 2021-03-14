const express = require('express')
const GoalsController = require('../controllers/goalsController')
const passport = require('../middleware/passportMiddleware')
const verifyRole = require('../middleware/roleMiddleware')

const goals = new GoalsController()
const restrict = passport.authenticate('jwt', { 
    session: false
})
const app = express.Router()

// Get All Goals
app.get('/all', restrict, async (req, res) => {
    const { query } = req
    res.send(await goals.get({
        ...query
    }))
})

// Get All by Search Goals through User Input
app.get('/search', restrict, async (req, res) => {
    try {
        const { nama } = req.query
        const searchGoal = await goals.searchByInput(nama)
        if (searchGoal.length == 0) {
            return res.status(404).json({
                message: 'Goals not found!'
            })
        } else {
            return res.send(searchGoal)
        }
    } catch (err) {
        next(err)
    }
    
})

// Get Goals based on Category Filter

app.get('/show', restrict, async (req, res, next) => {

    try {
        const { category } = req.query
        const goalsDisplay = await goals.findCategory(category)
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

app.post('/add', restrict, verifyRole('admin'), async (req, res, next) => {

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