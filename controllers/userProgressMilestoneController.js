const { UserProgressMilestones } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')

class UserProgressMilestoneController extends BaseController {
    constructor() {
        super(UserProgressMilestones)
    }
}

module.exports = UserProgressMilestoneController