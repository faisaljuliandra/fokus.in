const { Milestones, Goals } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')

class MilestoneController extends BaseController {
    constructor() {
        super(Milestones)
    }

    findGoal(goal) {
        return Milestones.findAll({
            include: {
                model: Goals,
                where: {
                    ...goal && {id: goal}
                }
            }
        })
    }
}

module.exports = MilestoneController