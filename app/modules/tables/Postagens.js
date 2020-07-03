const Sequelize = require('sequelize')
const db = require('../../../config/databaseConnection')

const Postagens = db.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  },
  usuario_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'usuarios',
      key: 'usuario_id'
      }
  },
})

module.exports = Postagens
