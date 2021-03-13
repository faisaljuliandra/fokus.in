const express = require('express')
const NotesController = require('../controllers/notesController')
const passport = require('../middleware/passportMiddleware')
const verifyRole = require('../middleware/roleMiddleware')

const notes = new NotesController()
const restrict = passport.authenticate('jwt', { 
    session: false
})
const app = express.Router()

app.get('/show', restrict, async (req, res) => {
    try {
        const { user, goal } = req.query
        const userNotesDisplay = await notes.notesFromGoals(user, goal)
        if (userNotesDisplay.length == 0) {
            return res.status(303).json({
                message: `User hasn't write notes yet! Create the new one`,
            })
            
        } else {
            return res.status(200).send(userNotesDisplay)
        }
    } catch (err) {
        next(err);
    }
})

app.post('/add', restrict,  async (req, res, next) => {
    try {
        const { userGoalsId, isiNotes } = req.body
        const userNotes = await notes.add({
            userGoalsId,
            isiNotes
        })
        res.status(201).json({
            success: true,
            message: 'Succesfully store the user notes data',
            data: userNotes
        })
    } catch (err) {
        next(err)
    }
})

app.put('/:id', restrict, async (req, res) => {
    const { body, params } = req
    await notes.edit(params.id, body)
    res.send('Successfully edit the user notes data!')
})

app.delete('/:id', restrict, async (req, res) => {
    const { params } = req
    await notes.remove(params.id)
    res.send('Successfully delete the user notes data!')
})

module.exports = app