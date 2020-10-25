import {CliPackageJson, Inject, registerProvider} from "@tsed/cli-core";
import {getValue} from "@tsed/core";

export interface FeatureValue {
  type: string;
  dependencies?: {[key: string]: string};
  devDependencies?: {[key: string]: string};
}

export interface Feature {
  name: string;
  value: FeatureValue;
}

export type Features = Feature[];

export function Features() {
  return Inject(Features);
}

export function hasFeature(feature: string) {
  return (ctx: any): boolean => !!ctx.features.find((item: any) => item.type === feature);
}

export function hasValue(expression: string, value: any) {
  return (ctx: any) => getValue(expression, ctx) === value;
}

export function isPlatform(...types: string[]) {
  return (ctx: any) => [types].includes(ctx.platform);
}

export const FEATURES_TYPEORM_CONNECTION_TYPES = [
  {
    name: "MySQL",
    value: {
      type: "typeorm:mysql",
      dependencies: {
        mysql: "latest"
      }
    }
  },
  {
    name: "MariaDB",
    value: {
      type: "typeorm:mariadb",
      dependencies: {
        mariadb: "latest"
      }
    }
  },
  {
    name: "Postgres",
    value: {
      type: "typeorm:postgres",
      dependencies: {
        pg: "latest"
      }
    }
  },
  {
    name: "CockRoachDB",
    value: {
      type: "typeorm:postgres",
      dependencies: {
        cockroachdb: "latest"
      }
    }
  },
  {
    name: "SQLite",
    value: {
      type: "typeorm:sqlite",
      dependencies: {
        sqlite3: "latest"
      }
    }
  },
  {
    name: "Cordova",
    value: {
      type: "typeorm:cordova"
    }
  },
  {
    name: "NativeScript",
    value: {
      type: "typeorm:nativescript"
    }
  },
  {
    name: "Oracle",
    value: {
      type: "typeorm:oracle",
      dependencies: {
        oracledb: "latest"
      }
    }
  },
  {
    name: "MsSQL",
    value: {
      type: "typeorm:mssql",
      dependencies: {
        mssql: "latest"
      }
    }
  },
  {
    name: "MongoDB",
    value: {
      type: "typeorm:mongodb",
      dependencies: {
        mongodb: "latest"
      }
    }
  },
  {
    name: "SQL.js",
    value: {
      type: "typeorm:sqljs",
      dependencies: {}
    }
  },
  {
    name: "ReactNative",
    value: {
      type: "typeorm:reactnative",
      dependencies: {}
    }
  },
  {
    name: "Expo",
    value: {
      type: "typeorm:expo",
      dependencies: {}
    }
  }
];

registerProvider({
  provide: Features,
  deps: [CliPackageJson],
  useFactory(cliPackageJson: CliPackageJson) {
    const cliVersion = cliPackageJson.version;

    return [
      {
        type: "checkbox",
        name: "features",
        message: "Check the features needed for your project",
        choices: [
          {
            name: "GraphQL",
            value: {
              type: "graphql",
              dependencies: {
                "@tsed/graphql": "{{tsedVersion}}",
                "apollo-datasource": "latest",
                "apollo-datasource-rest": "latest",
                "apollo-server-express": "latest",
                "type-graphql": "latest",
                graphql: "14.7.0"
              },
              devDependencies: {
                "apollo-server-testing": "latest"
              }
            }
          },
          {
            name: "Database",
            value: {type: "db"}
          },
          {
            name: "Passport.js",
            when: isPlatform("express"),
            value: {
              type: "passportjs",
              devDependencies: {
                "@tsed/cli-plugin-passport": cliVersion
              }
            }
          },
          {
            name: "Socket.io",
            value: {
              type: "socketio",
              dependencies: {
                "@tsed/socketio": "{{tsedVersion}}"
              }
            }
          },
          {
            name: "Swagger",
            value: {
              type: "swagger",
              dependencies: {
                "@tsed/swagger": "{{tsedVersion}}"
              }
            }
          },
          {
            name: "Testing",
            value: {
              type: "testing",
              dependencies: {},
              devDependencies: {
                "@types/supertest": "latest",
                supertest: "latest"
              }
            }
          },
          {
            name: "Linter",
            value: {
              type: "linter"
            }
          }
        ]
      },
      {
        message: "Choose a ORM manager",
        type: "list",
        name: "featuresDB",
        when: hasFeature("db"),
        choices: [
          {
            name: "Mongoose",
            value: {
              type: "mongoose",
              devDependencies: {
                "@tsed/cli-plugin-mongoose": cliVersion
              }
            }
          },
          {
            name: "TypeORM",
            value: {
              type: "typeorm",
              devDependencies: {
                "@tsed/cli-plugin-typeorm": cliVersion
              }
            }
          }
        ]
      },
      {
        type: "list",
        name: "featuresTypeORM",
        message: "Which TypeORM you want to install?",
        choices: FEATURES_TYPEORM_CONNECTION_TYPES,
        when: hasValue("featuresDB.type", "typeorm")
      },
      {
        message: "Choose unit framework",
        type: "list",
        name: "featuresTesting",
        when: hasFeature("testing"),
        choices: [
          {
            name: "Jest",
            value: {
              type: "jest",
              devDependencies: {
                "@tsed/cli-plugin-jest": cliVersion
              }
            }
          },
          {
            name: "Mocha + Chai + Sinon",
            value: {
              type: "mocha",
              devDependencies: {
                "@tsed/cli-plugin-mocha": cliVersion
              }
            }
          }
        ]
      },
      {
        message: "Choose linter tools framework",
        type: "list",
        name: "featuresLinter",
        when: hasFeature("linter"),
        choices: [
          {
            name: "EsLint",
            checked: true,
            value: {
              type: "eslint",
              devDependencies: {
                "@tsed/cli-plugin-eslint": cliVersion
              }
            }
          },
          {
            name: "TsLint (deprecated)",
            checked: true,
            value: {
              type: "tslint",
              devDependencies: {
                "@tsed/cli-plugin-tslint": cliVersion
              }
            }
          }
        ]
      },
      {
        message: "Choose extra linter tools",
        type: "checkbox",
        name: "featuresExtraLinter",
        when: hasFeature("linter"),
        choices: [
          {
            name: "Prettier",
            value: {
              type: "prettier"
            }
          },
          {
            name: "Lint on commit",
            value: {
              type: "lintstaged"
            }
          }
        ]
      }
    ];
  }
});
