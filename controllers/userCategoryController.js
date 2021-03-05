const { UserCategory } = require('../models')
const {nanoid} = require('nanoid')
const BaseController = require('./baseController')

class UserCategoryController extends BaseController{
    constructor(){
        super(UserCategory)
    }
}

module.exports = UserCategoryController