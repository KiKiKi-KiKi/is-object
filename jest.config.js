// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/tests/**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.[t|j]sx?$": '<rootDir>/node_modules/babel-jest',
  },

  moduleFileExtensions: ['js', 'ts', ],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx}",
    "!**/node_modules/**",
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The test environment that will be used for testing
  testEnvironment: "jsdom",
};
