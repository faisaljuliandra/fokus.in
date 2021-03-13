const {Discussions} = require('../models')
const {nanoid} = require('nanoid')
const BaseController = require('./baseController')

class DiscussionsController extends BaseController{
    constructor(){
        super(Discussions)
    }
}

module.exports = DiscussionsController