require('colors')
const { exec } = require('shelljs')
const ora = require('ora')
const { repo: { baseBranch } } = require('../../config')

const spinner = ora()

const createBranch = (branchName) => {
  new Promise((resolve, reject) => {
    spinner.start(`Creating branch: ${branchName}`.yellow)

    if (exec(`git branch --list ${branchName}`).stdout) {
      reject()
    } else {
      exec(`git checkout ${baseBranch}`)
      exec(`git pull origin ${baseBranch}`)
      exec(`git checkout -b ${branchName}`)
      resolve()
    }
  })
    .then(() => {
      spinner.succeed('Branch created!'.green)
    })
    .catch(() => {
      spinner.fail('It looks like that branch already exists'.red)
    })
}

module.exports = createBranch
