
import path from 'path';
import { readJsonSync } from 'fs-extra';
import { pkgBasePath } from './config';

export const version = () => {
  const pkgPath = path.join(pkgBasePath, '../package.json');
  return readJsonSync(pkgPath).version;
};