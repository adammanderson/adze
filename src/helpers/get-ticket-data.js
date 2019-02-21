const rp = require('request-promise')
const { api: { authKey, endpoint } } = require('../../config')

const headers = {
  Authorization: `Basic ${authKey}`,
  'Content-Type': 'application/json',
}

const getTicketData = ticketId => rp({
  url: `${endpoint}${ticketId}`,
  headers,
}).then(data => JSON.parse(data))

module.exports = getTicketData
