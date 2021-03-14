const { UserProgressMilestones, UserGoals, Milestones } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')
class UserProgressMilestoneController extends BaseController {
    constructor() {
        super(UserProgressMilestones)
    }
    findUserGoals(user, goal, milestone) {
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
            },{
                model: Milestones,
                where: {
                    ...milestone && {id: milestone} 
                }
            }]
        })
    }
}
module.exports = UserProgressMilestoneController