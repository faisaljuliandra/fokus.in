const { UserProgressMilestones, UserGoals } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')
class UserProgressMilestoneController extends BaseController {
    constructor() {
        super(UserProgressMilestones)
    }
    findUserGoals(user, goal) {
        return UserProgressMilestones.findAll({
            include: [{
                model: UserGoals,
                where: {
                    ...user && {userId: user}
                }
            }, {
                model: UserGoals,
                where: {
                    ...goal && {goalsId: goal}
                }
            }]
        })
    }
}
module.exports = UserProgressMilestoneController