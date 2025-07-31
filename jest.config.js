/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  testMatch: ['**/tests/**/*.?(m)ts', '**/?(*.)+(spec|test).?(m)ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
