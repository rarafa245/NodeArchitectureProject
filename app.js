const server = require('./config')
const app = server.server

app.listen(3000, () => {
    console.log('Server Start | Port 3000')
})
