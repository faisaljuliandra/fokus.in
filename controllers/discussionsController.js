const {Discussions, Goals, Users} = require('../models')
const {nanoid} = require('nanoid')
const BaseController = require('./baseController')

class DiscussionsController extends BaseController{
    constructor(){
        super(Discussions)
    }

    findByGoalsId(goal, user) {
        return Discussions.findAll({
            include: [{
                model: Goals,
                where: {
                    ...goal && { id: goal }
                }
            }, {
                model: Users,
                where: {
                    ...user && { id: user }
                }
            }]
        })
    }
}

module.exports = DiscussionsController