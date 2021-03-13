const { UserCategories } = require('../models')
const {nanoid} = require('nanoid')
const BaseController = require('./baseController')

class UserCategoryController extends BaseController{
    constructor(){
        super(UserCategories)
    }
}

module.exports = UserCategoryController