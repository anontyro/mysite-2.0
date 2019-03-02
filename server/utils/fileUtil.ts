import * as fs from 'fs';
import {promisify} from 'util';

const readdir = promisify(fs.readdir);

export const mapDirectory = async (dir: string): Promise<string[]> => {
  try {
    const files = await readdir(dir);
    return files;
  } catch (ex) {
    console.log(ex);
    throw new Error(ex);
  }
};
