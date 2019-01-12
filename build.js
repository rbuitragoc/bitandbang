'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('            Rick Buitrago'),
  handle: chalk.white('deekattax'),
  work: chalk.white('\u2615 Lead Developer at Endava'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('deekattax'),
  github: chalk.gray('https://github.com/') + chalk.green('rbuitragoc'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('rbuitrago  '),
  npx: chalk.red('npx') + ' ' + chalk.white('deekattax'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + newline + // data.labelLinkedIn + data.linkedin
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
