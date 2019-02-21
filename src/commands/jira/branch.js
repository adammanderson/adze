require('colors')
const getIssueData = require('../../helpers/get-issue-data')
const createBranch = require('../../helpers/create-branch')

function branch(issueId) {
  getIssueData(issueId)
    .then((data) => {
      const { issuetype, summary } = data.fields
      const formattedIssueType = issuetype.name.replace(/-/g, '')
      const formattedSummary = `${summary}`.replace(/\s+/g, '-')
      const branchName = `${formattedIssueType}/${data.key}-${formattedSummary}`.toLowerCase()

      createBranch(branchName)
    })
}

module.exports = branch
