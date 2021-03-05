const { Goals } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')

class GoalsController extends BaseController {
    constructor() {
        super(Goals)
    }
}

module.exports = GoalsController