const tables = require('../tables')

async function queryAll() {
  const elements = await tables.Postagens.findAll();
  console.log(elements[0].dataValues)
}

module.exports = queryAll
