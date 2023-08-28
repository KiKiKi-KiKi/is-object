/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/tests/'],
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['/node_modules/'],
  reporters: ['default', 'jest-junit'],
};
