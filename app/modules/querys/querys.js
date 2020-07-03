const tables = require('../tables')

async function queryAll() {
  let results = []

  const elements = await tables.Postagens.findAll()
    .then((data) => data.forEach( item => results.push(item.dataValues) ))

  console.log(results)
}

module.exports = queryAll
