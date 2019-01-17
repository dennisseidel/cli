const {exec} = require('shelljs')
const {platform} = require('os')
const commandExists = require('command-exists')

const os = platform()

const installBrew = () => {
  commandExists('brew', (err, commandExists) => {
    if (err) {
      console.log(err.stack)
    }
    if (!commandExists) {
      // proceed confidently knowing this command is available
      // https://www.ostechnix.com/linuxbrew-common-package-manager-linux-mac-os-x/
      // On Debian, Ubuntu, Linux Mint:
      if (os === 'xxx') {
        exec('sudo apt-get update && sudo apt-get install build-essential curl git python-setuptools ruby')
      }
      // Red Hat, CentOS, Fedora
      if (os === 'xxx') {
        exec("sudo yum groupinstall 'Development Tools'")
        exec('sudo yum install curl git irb python-setuptools ruby')
      }
      const res = exec('ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install)"', {silent: true}).stdout
      console.log(res)
      exec('echo \'export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"\' >>~/.profile\'')
      exec('echo \'export MANPATH="/home/linuxbrew/.linuxbrew/share/man:$MANPATH"\' >>~/.profile')
      exec('echo \'export INFOPATH="/home/linuxbrew/.linuxbrew/share/info:$INFOPATH"\' >>~/.profile')
      exec('PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"')
      exec('source ~/.profile')
      exec('brew install gcc')
      exec('brew doctor')
    }
  })
}

const installGit = () => {
  commandExists('git', (err, commandExists) => {
    if (err) {
      console.log(err.stack)
    }
    if (!commandExists) {
      exec('brew install git')
    }
  })
}

const installHub = () => {
  commandExists('hub', (err, commandExists) => {
    if (err) {
      console.log(err.stack)
    }
    if (!commandExists) {
      exec('brew install hub')
    }
  })
}

const installPython = () => {
  commandExists('python', (err, commandExists) => {
    if (err) {
      console.log(err.stack)
    }
    if (!commandExists) {
      exec('brew install python')
    }
  })
}

const installNode = () => {
  commandExists('node', (err, commandExists) => {
    if (err) {
      console.log(err.stack)
    }
    if (!commandExists) {
      exec('brew install node')
    }
  })
}

const installDependencies = () => {
  installBrew()
  installGit()
  installHub()
  installPython()
  installNode()
}

module.exports = installDependencies
