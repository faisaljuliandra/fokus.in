const express = require('express')
const UserController = require('../controllers/userController')
const { validateRegister, validateLogin } = require('../validator/validators')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const users = new UserController()
const app = express.Router()

app.post('/register', validateRegister, async (req, res) => {
    const { username, password, nama, email, jenisKelamin, noTelp, role, goalId, taskListId } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({
            status: "400 Bad Request",
            messages: errors.array().map(obj => `${obj.param} = ${obj.msg}`)
        })
    } else {
        const result = await users.register(username, password, nama, email, jenisKelamin, noTelp, role, goalId, taskListId)
        res.send(result)
    }
})

app.post('/login', validateLogin, async (req, res) => {
    const errors = validationResult(req)
    const { username, password } = req.body
    if (!errors.isEmpty()) {
        res.status(401).json({
            status: "401 Unauthorized",
            messages: errors.array().map(obj => `${obj.param} = ${obj.msg}`)
        })
    } else if (username, password) {
        const result = await users.login(username, password)
        res.cookie('access_token', jwt.sign({ id: users.id }, process.env.JWT_SECRET)).send(result)
    } else {
        res.send("wrong username or password")
    } //butuh handle error kalo 2 2 nya salah
})

app.post('/login/admin', validateLogin, async (req, res) => {
    const errors = validationResult(req)
    const { username, password } = req.body
    if (!errors.isEmpty()) {
        res.status(401).json({
            status: "401 Unauthorized",
            messages: errors.array().map(obj => `${obj.param} = ${obj.msg}`)
        })
    } else if ("admin") {
        const result = await users.loginAdmin(username, password)
        res.cookie('access_token', jwt.sign({ id: users.id }, process.env.JWT_SECRET)).send(result)
    } else {
        res.send("log in to admin first")
    }
})

app.post('/logout', async (req, res) => {
    if (await req.cookies.access_token) {
        res.clearCookie('access_token');
        res.status(200).json({
            message: "Log out succesful"
        })
    } else {
        res.status(401).json({
            status: "401 Unauthorized",
            message: "Not logged in"
        })
    }
})

module.exports = app
