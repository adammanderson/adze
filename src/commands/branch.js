require('colors')
const { SUCCESS } = require('../constants/log-levels')
const log = require('../helpers/log')
const getTicketData = require('../helpers/get-ticket-data')

function branch(ticketId) {
  getTicketData(ticketId)
    .then(({ data }) => log(ticketId, data, SUCCESS))
}

module.exports = branch
