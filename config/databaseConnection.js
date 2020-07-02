const Sequelize = require('sequelize')
const dbConfig = require('./databaseConfig')

const connection = new Sequelize(dbConfig)

connection.authenticate()
  .then(() => console.log('Connected to mysql localhost'))
  .catch((error) => console.log(error))

module.exports = connection
