'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _version = require('../version');

var _init = require('./init');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var program = _commander2.default;

program.version((0, _version.version)()).description('config').parse(process.argv);

(0, _init.init)();