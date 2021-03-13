const { UserGoals, Users, Goals } = require('../models')
const {nanoid} = require('nanoid')
const BaseController = require('./baseController')

class UserGoalsController extends BaseController{
    constructor(){
        super(UserGoals)
    }

    findGoalsByUserId(user) {
        return UserGoals.findAll({
            where: {
                isEnrolled : true
            },
            include: {
                model: Users,
                where: {
                    ...user && { id: user }
                }
            }
        })
    }
}

module.exports = UserGoalsController