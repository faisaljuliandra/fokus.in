const { Notes, UserGoals } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')

class NotesController extends BaseController {
    constructor() {
        super(Notes)
    }

    notesFromGoals(user, goal) {
        return Notes.findAll({
            include: [{
                model: UserGoals,
                where: {
                    ...user && { userId: user }
                }
            }, {
                model: UserGoals,
                where: {
                    ...goal && { goalsId: goal }
                }
            }]
        })
    }

}

module.exports = NotesController