const { Milestones } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')

class MilestoneController extends BaseController {
    constructor() {
        super(Milestones)
    }
}

module.exports = MilestoneController