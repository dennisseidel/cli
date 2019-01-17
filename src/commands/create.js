const {Command, flags} = require('@oclif/command')
const opn = require('opn')

class CreateCommand extends Command {
  async run() {
    const {flags} = this.parse(CreateCommand)
    const type = flags.type
    if (type === 'cli') {
      this.log('Use oclif to create a cli.')
      opn('https://denseidel.github.io/docs/basics/devsecops.html#clis', {wait: false})
    }
  }
}

CreateCommand.description = `Create resources e.g. cli, database
...
Extra documentation goes here
`

CreateCommand.flags = {
  type: flags.string({char: 't', description: 'type to create'}),
}

module.exports = CreateCommand
