import * as Fs from "fs-extra";
import {join} from "path";

export function importModule(mod: string, root: string = process.cwd()) {
  try {
    if (process.env.NODE_ENV === "development") {
      return import(mod);
    }
  } catch (er) {}

  let path = join(root, "node_modules", mod);

  if (!Fs.existsSync(path)) {
    path = require.resolve(mod);
  }

  return import(path);
}