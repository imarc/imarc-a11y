#! /usr/bin/env node

const cypress = require('cypress')
const yargs = require('yargs')

const scan = ({ url, main }) => {
  console.log(`you have run scan for url ${url} main content ${main}`)

  cypress.run({
    config: {
      baseUrl: url,
      setupNodeEvents (on, config) {
        on('task', {
          log (message) {
            console.log(message)

            return null
          },
          table (message) {
            console.table(message)

            return null
          },
        })
      },
    },
    env: {
      MAIN_CONTENT_ID: main,
    },
  })
}

yargs
  .scriptName('imarc-a11y')
  .usage('$0 <command> [args]')
  .command(
    'scan <url> [main]',
    'scanning url',
    (yargs) => {
      yargs
        .positional('url', {
          type: 'string',
          description: 'url to scan',
        })
        .positional('main', {
          type: 'string',
          default:'#main-content',
        })
    },
    scan
  )
  .help()
  .argv
