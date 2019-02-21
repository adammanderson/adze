require('colors')
const { copy, existsSync } = require('fs-extra')
const shell = require('shelljs')
const { name } = require('./package')
const log = require('./src/helpers/log');
const { SUCCESS, INFO, ERROR } = require('./src/constants/log-levels');

shell.exec('npm link')

const configFileExample = 'config.example.json'
const configFileReal = configFileExample.replace('.example', '')

if (existsSync(configFileReal)) {
  log(`${name} config already exists`, INFO)
  process.exit(0)
}

copy(configFileExample, configFileReal)
  .then(() => log(`Created ${name} config file`, SUCCESS))
  .catch(() => log(`Could not create ${name} config file, check the permissions`, ERROR))
