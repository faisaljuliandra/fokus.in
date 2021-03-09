const express = require('express')
const app = express.Router()

app.get('/:path', (req, res) => {
    res.status(404).json({
        status: "404 Not Found",
        message: '404 Not Found'
    })
})

app.post('/:path', (req, res) => {
    res.status(404).json({
        status: "404 Not Found",
        message: '404 Not Found'
    })
})

app.put('/:path', (req, res) => {
    res.status(404).json({
        status: "404 Not Found",
        message: '404 Not Found'
    })
})

app.delete('/:path', (req, res) => {
    res.status(404).json({
        status: "404 Not Found",
        message: '404 Not Found'
    })
})

module.exports = app