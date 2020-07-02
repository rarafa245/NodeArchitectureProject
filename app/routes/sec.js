const secondPage = (application) => {

    application.get('/r', (req, res) => {
        res.send('Hello World')
    })

}

module.exports = secondPage