const express = require('express')
const app = express.Router()

app.get('/', async (req, res) => {
    res.send('Sudah Oke Gan')
})

module.exports = app