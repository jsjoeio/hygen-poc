// This is the script we run to generate a new React component
const { execSync } = require('child_process');
const path = require('path')

// The args passed when running this script
const args = process.argv

// The name of the component is the only valid arg at this time.
// It will come as the last arg.
const nameOfComponent = args[process.argv.length - 1]

// Grab the path of the user's project
const pathWhereScriptIsRunning = process.cwd()

// This is where their templates are (at least we assume so)
const theirTemplatePath = pathWhereScriptIsRunning + '/_templates'

// The root of our package, so that we can leverage the scripts in the `package.json`
const rootDirectory = path.join(__dirname, '../../');

execSync(`HYGEN_TMPLS=${theirTemplatePath} yarn g:component ${nameOfComponent} --path=${pathWhereScriptIsRunning}`, { cwd: rootDirectory, stdio: 'inherit'})