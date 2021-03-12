const {Usergoals} = require('../models')
const {nanoid} = require('nanoid')
const BaseController = require('./baseController')

class UserGoalsController extends BaseController{
    constructor(){
        super(Usergoals)
    }
}

module.exports = UserGoalsController