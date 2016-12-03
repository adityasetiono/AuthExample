import express from 'express'
import bodyParser from 'body-parser'
import config from '../config.js'
import users from './routes/users'
import initDB from './init/db'

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser())

initDB()

// define main routes
app.use('/users', users)

app.listen(config.express.port, () => {
    console.log('Server is listening on port ' + config.express.port)
})
