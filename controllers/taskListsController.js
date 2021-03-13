const {TaskLists} = require('../models')
const {nanoid} = require('nanoid')
const BaseController = require('./baseController')

class TaskListsController extends BaseController{
    constructor(){
        super(TaskLists)
    }
}

module.exports = TaskListsController