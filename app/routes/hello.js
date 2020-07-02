const { application } = require("express");
const app = require("../../config/server");

const soma = require(__dirname + './../controllers/soma')

const helloPage = (application) => {

    application.get('/', (req, res) => {
        res.send(`${soma.soma2(1,1)}`)
    })

    application.get('/a', (req, res) => {
        res.send(`${soma.soma3(1,2,3)}`)
    })

}

module.exports = helloPage
