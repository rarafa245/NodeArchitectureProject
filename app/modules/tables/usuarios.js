const Sequelize = require('sequelize')
const db = require('../../../config/databaseConnection')

const Usuarios = db.define('usuarios', {
  usuario_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  usuario: {
    type: Sequelize.STRING
  },
  senha: {
    type: Sequelize.TEXT
  }
})

module.exports = Usuarios
