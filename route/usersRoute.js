const express = require('express')
const UserController = require('../controllers/userController')
const verifyRole = require('../middleware/roleMiddleware')
const user = new UserController()
const { Users } = require('../models')
const app = express.Router()

app.get('/admin', verifyRole('admin'), async (req, res, next) => {
  const result = await user.get().catch(next)
  res.send(result)
})

app.get('/', async (req, res) => {
  res.status(401).json({
    status: "401 Unauthorized",
    messages: "Cannot get all data, please search by id"
  })
})

app.get('/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await user.get({ id }).catch(next)
  res.send(result)
})

app.post('/', async (req, res, next) => {
  res.status(403).json({
    status: "403 Forbidden",
    messages: "Cannot create any profile, please create new register"
  })
})

app.put('/:id', async (req, res, next) => {
  const { id } = req.params
  if (await user.updateProfile(id, req.body, Users).catch(next)) {
    res.send("update profile done")
  } else {
    res.send("can't update profile")
  }
})

app.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  await user.remove(id).catch(next)
  res.send("ok")
})

module.exports = app
