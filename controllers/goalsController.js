const { Users, Goals, Categories } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')

class GoalsController extends BaseController {
    constructor() {
        super(Goals)
    }

    findCategory(category) {
        return Goals.findAll({
            include: {
                model: Categories,
                where: {
                    ...category && {namaKategori: category}
                }
            }
        })
    }
}

module.exports = GoalsController

