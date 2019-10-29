// This is the script we run to generate a new React component
const { execSync, exec } = require('child_process');
const path = require('path')
const hygen = require('hygen')
// 1. Get it to use the template
// HYGEN_TMPLS=my-package/_templates hygen component new --name

// The args passed when running this script
const args = process.argv
// The name of the component is the only valid arg at this time.
// It will come as the last arg.
const nameOfComponent = args[process.argv.length - 1]
// We're going to have our users run the script from the place with which they
// want their component generated.
const pathWhereScriptIsRunning = process.cwd()

// This is where their templates are (at least we assume so)
const theirTemplatePath = pathWhereScriptIsRunning + '/_templates'

// console.log('hello from g-react-component', nameOfComponent)
// console.log('you ran this script from this root: ', pathWhereScriptIsRunning)

// The first thing I want to do is run a command, using our script, and their templates
const rootDirectory = path.join(__dirname, '../../');
// execSync(`HYGEN_TEMPLS=${theirTemplatePath} yarn g:component`, { cwd: rootDirectory})
execSync('yarn test', { cwd: rootDirectory, stdio: 'inherit'})
execSync(`HYGEN_TMPLS=${theirTemplatePath} yarn g:component ${nameOfComponent} --path=${pathWhereScriptIsRunning}`, { cwd: rootDirectory, stdio: 'inherit'})