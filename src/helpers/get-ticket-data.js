const rp = require('request-promise')
const ora = require('ora')

const { api: { authKey, endpoint } } = require('../../config')

const headers = {
  Authorization: `Basic ${authKey}`,
  'Content-Type': 'application/json',
}

const getTicketData = (ticketId) => {
  const spinner = ora('Finding issue').start()

  return rp({
    url: `${endpoint}${ticketId}`,
    headers,
  })
    .then((data) => {
      spinner.succeed('Found issue!')
      return JSON.parse(data)
    })
    .catch(() => {
      spinner.succeed('Oops. Looks like that issue does not exist.')
      process.exit(0)
    })
}

module.exports = getTicketData
