dscli
=====

Cli to create the assets used in [Dennis Notebook](https://denseidel.github.io/docs/index.html) including architecture, services, frontends. 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dscli.svg)](https://npmjs.org/package/dscli)
[![CircleCI](https://circleci.com/gh/denseidel/cli/tree/master.svg?style=shield)](https://circleci.com/gh/denseidel/cli/tree/master)
[![Codecov](https://codecov.io/gh/denseidel/cli/branch/master/graph/badge.svg)](https://codecov.io/gh/denseidel/cli)
[![Downloads/week](https://img.shields.io/npm/dw/dscli.svg)](https://npmjs.org/package/dscli)
[![License](https://img.shields.io/npm/l/dscli.svg)](https://github.com/denseidel/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dscli
$ ds COMMAND
running command...
$ ds (-v|--version|version)
dscli/0.0.0 darwin-x64 node-v11.4.0
$ ds --help [COMMAND]
USAGE
  $ ds COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ds hello`](#ds-hello)
* [`ds help [COMMAND]`](#ds-help-command)

## `ds hello`

Describe the command here

```
USAGE
  $ ds hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/denseidel/cli/blob/v0.0.0/src/commands/hello.js)_

## `ds help [COMMAND]`

display help for ds

```
USAGE
  $ ds help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_
<!-- commandsstop -->

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our process for submitting pull requests to us.

### Develop

#### Create 

* Follow the oclif [tutorial](https://oclif.io/docs/multi)

Explain how this project was build and give the technical background to contribute.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/zalando-incubator/_projectname_/tags). 

## Authors

See the list of [contributors](CONTRIBUTORS) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details