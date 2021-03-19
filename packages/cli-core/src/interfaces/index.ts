import {Type} from "@tsed/core";
import {CommandProvider} from "./CommandProvider";
import {PackageJson} from "./PackageJson";

export * from "./CommandProvider";
export * from "./CommandParameters";
export * from "./CommandMetadata";
export * from "./CliDefaultOptions";
export * from "./ProjectPreferences";
export * from "./PackageJson";
export * from "./Tasks";

declare global {
  namespace TsED {
    interface Configuration {
      /**
       *
       */
      name: string;
      /**
       *
       */
      commands: Type<CommandProvider>[];
      /**
       *
       */
      pkg: PackageJson;
      /**
       *
       */
      templateDir: string;
      /**
       *
       * @param pkg
       */
      defaultProjectPreferences?: (pkg?: any) => Record<string, any>;
      /**
       *
       */
      project: {
        rootDir?: string;
        srcDir?: string;
        scriptsDir?: string;
        reinstallAfterRun?: boolean;
      };
    }
  }
}
