'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const outerBoxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const headerBoxenOptions = {
  padding: 0,
  margin: 0,
  borderStyle: 'double',
  borderColor: 'grey'
}

// Text + chalk definitions
const data = {
  name: chalk.white(' Rick Buitrago'),
  handle: chalk.white('deekattax'),
  bio: chalk.gray('Scaling apps with Java/JS, Building Teams with Agile '),
  work: chalk.white('\u2615 Senior Software Engineer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('deekattax'),
  github: chalk.gray('https://github.com/') + chalk.green('rbuitragoc'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('rbuitrago'),
  mobile: chalk.gray('+57 ') + chalk.yellow('300 2691858'),
  npx: chalk.red('npx') + ' ' + chalk.white('deekattax'),
  labelWork: chalk.white.bold('         Work:'),
  labelTwitter: chalk.white.bold('      Twitter:'),
  labelGitHub: chalk.white.bold('       GitHub:'),
  labelLinkedIn: chalk.white.bold('     LinkedIn:'),
  labelMobile: chalk.white.bold('       Mobile:'),
  labelCard: chalk.white.bold('         Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = boxen(`${data.name} (${data.handle}) ${newline} ${data.bio}`, headerBoxenOptions)
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const mobileing = `${data.labelMobile}  ${data.mobile}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               mobileing + newline + newline + // data.labelMobile + data.mobile
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, outerBoxenOptions)))
