const { Categories } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')

class CategoryController extends BaseController {
    constructor() {
        super(Categories)
    }

}

module.exports = CategoryController