const {Command, flags} = require('@oclif/command')
const installDependencies = require('../components/dependencies')

class DeveloperEnvironmentCommand extends Command {
  async run() {
    installDependencies()
  }
}

DeveloperEnvironmentCommand.description = `Install local dependencies and developer tools
...
Extra documentation goes here
`

DeveloperEnvironmentCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DeveloperEnvironmentCommand
