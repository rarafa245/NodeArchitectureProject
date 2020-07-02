const Sequelize = require('sequelize')
const db = require('../../../config/databaseConnection')

const Postagens = db.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

module.exports = Postagens
