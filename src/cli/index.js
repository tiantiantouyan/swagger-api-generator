import commander from 'commander';
import { version } from '../version';
import { init } from './init';

const program = commander;

program
  .version(version())
  .description('config')
  .parse(process.argv);


init()