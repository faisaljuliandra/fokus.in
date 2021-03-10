const { Users } = require('../models')
const { nanoid } = require('nanoid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const BaseController = require('./baseController')

class UserController extends BaseController {
  constructor() {
    super(Users)
  }

  async register(username, password, nama, email, jenisKelamin, noTelp, role, taskListId) {
    const user = await Users.findOne({
      where: { username }
    })
    const encryptedPassword = await bcrypt.hash(password, 5)
    const id = nanoid()
    const payload = {
      id,
      username,
      nama,
      email,
      jenisKelamin,
      noTelp,
      role
    }
    if (user) {
      const error = "username already exists"
      return error
    } else {
      await Users.create({
        ...payload,
        password: encryptedPassword
      })
      payload.token = jwt.sign({ id }, process.env.JWT_SECRET)
      return payload
    }
  }

  async login(username, password) {
    const user = await Users.findOne({
      where: { username }
    })
    if (!user) {
      return "wrong username"
    } else if (await bcrypt.compare(password, user.password)) {
      const payload = {
        id: user.id,
        username: user.username,
        token: jwt.sign({ id: user.id }, process.env.JWT_SECRET)
      }
      return payload
    } else {
      return "wrong password"
    }
  }

  async loginAdmin(username, password) {
    const user = await Users.findOne({
      where: {
        username, 
        role: "admin" }
    })
    if (!user) {
      return "wrong username"
    } else if (await bcrypt.compare(password, user.password)) {
      const payload = {
        id: user.id,
        username: user.username,
        token: jwt.sign({ id: user.id }, process.env.JWT_SECRET)
      }
      return payload
    } else {
      return "log in to admin first"
    }
  }

  async updateProfile(id, data, model) {
    const user = await Users.findOne({
      where: { id }
    })
    if (!user) {
      const error = "user not found"
      return error
    } else {
      if (data.password) {
        const encryptedPassword = await bcrypt.hash(data.password, 5)
        const payload = {
          username: data.username,
          nama: data.nama,
          email: data.email,
          jenisKelamin: data.jenisKelamin,
          noTelp: data.noTelp,
          role: data.role
        }
        await model.update({
          ...payload,
          password: encryptedPassword
        }, {
          where: { id }
        })
        return payload
      } else {
        await model.update(data, {
          where: { id }
        })
        return data
      }
    }
  }
}

module.exports = UserController
