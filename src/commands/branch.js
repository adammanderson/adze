require('colors')
const { SUCCESS } = require('../constants/log-levels')
const log = require('../helpers/log')

function branch(ticketId) {
  log(ticketId, SUCCESS)
}

module.exports = branch
