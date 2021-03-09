require('dotenv').config()
const express = require('express')
const passport = require('./middleware/passportMiddleware')
const app = express()
const restrict = passport.authenticate('jwt', { session: false })
const cookieSession = require('cookie-session')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('views'))
app.use('/', require('./route/authRoute'))
app.use('/', require('./route/indexRoute'))
app.use('/motivation', require('./route/motivationRoute'))
app.use('/user', restrict, require('./route/usersRoute'))
app.use('/', require('./route/errorRoute'))

app.use(function (error, req, res, next) {
    res.send(error)
})

app.use(cookieSession({
    name: 'session',
    keys: ['key1']
}))

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})