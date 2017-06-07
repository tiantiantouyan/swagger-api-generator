import commander from 'commander';
import { version } from '../version';
import Generate from '../sub-commands/generate';
import minimist from 'minimist';

const subCommand = new Generate();

commander.on('--help', () => {
  subCommand.printUserHelp();
});

commander
  .version(version())
  .arguments('<sourcePath> [entity name]')
  .description('generates code based off a blueprint')
  .action((sourcePath, entityName, command) => {
    const debug = command.verbose;
    const dryRun = command.dryRun;
    const rawArgs = command.rawArgs;
    const options = minimist(rawArgs.slice(2));

    const cliArgs = {
      entity: {
        name: entityName,
        options,
        rawArgs
      },
      debug,
      dryRun
    };
    subCommand.run(sourcePath, cliArgs);
  })
  .parse(process.argv);