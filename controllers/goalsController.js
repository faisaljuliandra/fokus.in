const { Goals, Categories } = require('../models')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController')
const { Op } = require('sequelize')

class GoalsController extends BaseController {
    constructor() {
        super(Goals)
    }

    searchByInput(query) {
        return Goals.findAll({
            where: {
                namaGoal: { [Op.like]: `%${query}%`}
            },
        })
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

