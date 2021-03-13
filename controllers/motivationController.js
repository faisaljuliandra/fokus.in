const { Motivations } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')

class MotivationController extends BaseController {
    constructor() {
        super(Motivations)
    }
}

module.exports = MotivationController