const express = require('express')
const DiscussionsController = require('../controllers/discussionsController')
const passport = require('../middleware/passportMiddleware')
const verifyRole = require('../middleware/roleMiddleware')

const discussions = new DiscussionsController()
const restrict = passport.authenticate('jwt', {
    session: false
}) 
const app = express.Router()

app.get('/show', restrict, async (req, res, next) => {
    try{
        const result = await discussions.get()
        res.status(200).json({
            success: true,
            message: 'Success',
            data: result
        })
    } catch(error){
        next(error)
    }
})

app.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      const result = await discussions.get({ id })
      res.status(200).json({
        success: true,
        message: 'Success',
        data: result
      })
    } catch (error) {
      next(error)
    }
  })
  

app.post('/add', restrict, async (req, res, next) => {
    try{
        const {userId, goalsId, detailDiskusi, diskusiDate} = req.body
        const result = await discussions.add({
            userId, 
            goalsId, 
            detailDiskusi, 
            diskusiDate
        })
        res.status(201).json({
            success: true,
            message: 'Sukses menambahkan data diskusi',
            data: result
        })
    }catch(error){
        next(error)
    }
    
})

app.put('/:id', restrict, async (req, res, next) => {
    const {id} = req.params
    try{
        const {userId, goalsId, detailDiskusi, diskusiDate} = req.body
        const result = await discussions.edit(id, {
            userId, 
            goalsId, 
            detailDiskusi, 
            diskusiDate
        })
        res.status(201).json({
            success: true,
            message: `Update diskusi dengan id = '${id}' berhasil`,
            data: result
        })
    }catch(error){
        next(error)
    }
})

app.delete('/:id', restrict, async (req, res, next) => {
    try{
        const {id} = req.params
        const result = await discussions.remove(id)
        res.status(200).json({
            success: true,
            message: `Diskusi dengan id = '${id}' Telah Dihapus`,
            data: result
          })      
    }catch (error) {
        next(error)
    }
})

module.exports = app