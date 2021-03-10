const express = require('express')
const UserController = require('../controllers/userController')
const user = new UserController()
const app = express.Router()

app.get('/admin', async (req, res, next) => {
  const currentUser = req.user;
  if (currentUser.username !== "admin002") {
    return res.status(401).json({ 
      status: "401 Unauthorized",
      message: 'Log in to admin first' 
    });
  } else {
    const result = await user.get().catch(next)
    res.send(result)
  }
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
  await user.edit(id, req.body).catch(next)
  res.send("ok")
})

app.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  await user.remove(id).catch(next)
  res.send("ok")
})

module.exports = app
