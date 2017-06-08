import commander from 'commander';
import { version } from '../version';

const program = commander;

program
  .version(version());

console.log('asdsadsadsadsadsadsadasd');

program.parse(process.argv);
