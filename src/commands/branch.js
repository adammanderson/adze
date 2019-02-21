require('colors')
const getTicketData = require('../helpers/get-ticket-data')
const createBranch = require('../helpers/create-branch')

function branch(ticketId) {
  getTicketData(ticketId)
    .then((data) => {
      const { issuetype, summary } = data.fields
      const formattedIssueType = issuetype.name.replace(/-/g, '')
      const formattedSummary = `${summary}`.replace(/\s+/g, '-')
      const branchName = `${formattedIssueType}/${data.key}-${formattedSummary}`.toLowerCase()

      createBranch(branchName)
    })
}

module.exports = branch
