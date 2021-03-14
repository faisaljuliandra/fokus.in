const { UserGoals, Users, Goals } = require('../models')
const {nanoid} = require('nanoid')
const BaseController = require('./baseController')
const sequelize = require('sequelize')

class UserGoalsController extends BaseController{
    constructor(){
        super(UserGoals)
    }

    findGoalsByUserId(user, goal) {
        return UserGoals.findAll({
            where: {
                isEnrolled : true
            },
            include: [{
                model: Users,
                where: {
                    ...user && { id: user }
                }
            },{
                model: Goals,
                where: {
                    ...goal && { id: goal }
                }
            }]
        })
    }


    countTopGoals() {
        return UserGoals.findAll({
            attributes: [[sequelize.fn('count', sequelize.col('UserGoals.id')), 'count']],
            order: sequelize.literal('count DESC'),
            where: {
                isEnrolled: true
            },
            include: [{
                attributes: ['namaGoal', 'id'],
                model: Goals
            }],
            group: ['Goal.id', 'Goal.namaGoal'],
            limit: 3
        });
    }

}
module.exports = UserGoalsController