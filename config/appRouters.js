const appRoutes = (app) => {

    const hello = require(__dirname + './../app/routes/hello')(app)
    const sec = require(__dirname + './../app/routes/sec')(app)

    return {
      hello,
      sec
    }
}

module.exports = appRoutes
