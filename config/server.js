const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const appRouters = require(__dirname + '/appRouters')(app)

app.use(bodyParser.urlencoded({extended: true}))

module.exports = app
