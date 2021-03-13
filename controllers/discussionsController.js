const {Discussions, Goals} = require('../models')
const {nanoid} = require('nanoid')
const BaseController = require('./baseController')

class DiscussionsController extends BaseController{
    constructor(){
        super(Discussions)
    }

    findByGoalsId(goal) {
        return Discussions.findAll({
            include: {
                model: Goals,
                where: {
                    ...goal && { id: goal }
                }
            }
        })
    }
}

module.exports = DiscussionsController