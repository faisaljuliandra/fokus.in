require('dotenv').config()
const express = require('express')
const passport = require('./middleware/passportMiddleware')
const app = express()
const restrict = passport.authenticate('jwt', { session: false })
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(bodyParser.json())
app.use(express.static('views'))


app.use('/', require('./route/indexRoute'))
app.use('/', require('./route/authRoute'))
app.use('/category', require('./route/categoryRoute'))
app.use('/goals', require('./route/goalsRoute'))
app.use('/milestone', require('./route/milestoneRoute'))




app.use(function (error, req, res, next) {
    res.send(error)
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})