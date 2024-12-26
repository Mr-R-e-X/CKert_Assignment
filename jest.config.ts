import type { Config } from "jest";

const config: Config = {
  testMatch: ["**/tests/**/*.test.ts", "**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1", 
    "^src/utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  roots: ["<rootDir>/src", "<rootDir>/tests"], 
};

export default config;
