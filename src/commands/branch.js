require('colors')
const { INFO, SUCCESS } = require('../constants/log-levels')
const log = require('../helpers/log')
const getTicketData = require('../helpers/get-ticket-data')

function branch(ticketId) {
  getTicketData(ticketId)
    .then((data) => {
      const { issuetype, summary } = data.fields
      const branchName = `${issuetype.name}/${data.key}`.toLowerCase()
      const name = `${summary}`.replace(/\s+/g, '-').toLowerCase()

      log(`Key: ${data.key}`, INFO)
      log(`Issue Type: ${issuetype.name}`, INFO)
      log(`Summary: ${summary}`, INFO)
      log(`Generated branch name: ${branchName}-${name}`, SUCCESS)
    })
}

module.exports = branch
