const express = require('express')
const TaskListsController = require('../controllers/taskListsController')
const passport = require('../middleware/passportMiddleware')
const verifyRole = require('../middleware/roleMiddleware')

const taskLists = new TaskListsController()
const restrict = passport.authenticate('jwt', {
    session: false
}) 
const app = express.Router()

app.get('/show', restrict, async (req, res, next) => {
    try{
        const result = await taskLists.get()
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
      const result = await taskLists.get({ id })
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
        const {userId, namaList, detailList,warnaList, dateList, statusList} = req.body
        const result = await taskLists.add({
            userId, 
            namaList, 
            detailList, 
            warnaList,
            dateList, 
            statusList
        })
        res.status(201).json({
            success: true,
            message: 'Sukses menambahkan list',
            data: result
        })
    }catch(error){
        next(error)
    }
    
})

app.put('/:id', restrict, async (req, res, next) => {
    const {id} = req.params
    try{
        const {userId, namaList, detailList,warnaList, dateList, statusList} = req.body
        const result = await taskLists.edit(id, {
            userId, 
            namaList, 
            detailList, 
            warnaList,
            dateList, 
            statusList
        })
        res.status(201).json({
            success: true,
            message: `List dengan id = '${id}' berhasil di update`,
            data: result
        })
    }catch(error){
        next(error)
    }
})

app.delete('/:id', restrict, async (req, res, next) => {
    try{
        const {id} = req.params
        const result = await taskLists.remove(id)
        res.status(200).json({
            success: true,
            message: `Tasklist dengan id = '${id}' Telah Dihapus`,
            data: result
          })      
    }catch (error) {
        next(error)
    }
})

module.exports = app