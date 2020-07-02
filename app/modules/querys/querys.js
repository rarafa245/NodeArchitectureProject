const tables = require('../tables')

async function queryAll() {
  const elements = await tables.Postagens.findAll();
  console.log("All users:", JSON.stringify(elements, null, 7));
}

module.exports = queryAll
