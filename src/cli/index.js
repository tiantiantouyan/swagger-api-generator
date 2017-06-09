import commander from 'commander';
import { version } from '../version';

const program = commander;

program
  .version(version());

program
  .command('init', 'initialize a swagger-api-config.json file');

program
  .command('generate', 'generates files')
  .command('g', 'alias for generate');

program.parse(process.argv);
