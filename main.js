const express = require('express')


const bodyParser =require('body-parser')

const app = express()

const loginRoutes = require('./routes/loginpage')
const chatRoutes = require('./routes/chatpage')

app.use(bodyParser.urlencoded({extended:false}))

app.use(loginRoutes)
app.use(chatRoutes)


app.listen(3000)