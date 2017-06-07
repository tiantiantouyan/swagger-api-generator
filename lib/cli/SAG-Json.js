'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _version = require('../version');

var _generate = require('../sub-commands/generate');

var _generate2 = _interopRequireDefault(_generate);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subCommand = new _generate2.default();

_commander2.default.on('--help', function () {
  subCommand.printUserHelp();
});

_commander2.default.version((0, _version.version)()).arguments('<sourcePath> [entity name]').description('generates code based off a blueprint').action(function (sourcePath, entityName, command) {
  var debug = command.verbose;
  var dryRun = command.dryRun;
  var rawArgs = command.rawArgs;
  var options = (0, _minimist2.default)(rawArgs.slice(2));

  var cliArgs = {
    entity: {
      name: entityName,
      options: options,
      rawArgs: rawArgs
    },
    debug: debug,
    dryRun: dryRun
  };
  subCommand.run(sourcePath, cliArgs);
}).parse(process.argv);