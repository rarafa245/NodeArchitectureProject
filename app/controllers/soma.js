const querys = require('../modules/querys/querys')

const soma2 = (num1, num2) => {
  console.log(querys())
  return num1 + num2
}
const soma3 = (num1, num2, num3) => num1 + num2  + num3

module.exports.soma2 = soma2
module.exports.soma3 = soma3
