/* eslint-disable no-undef */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(./__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$',
  "reporters": [
    "default",
    ["jest-junit", { "outputDirectory": "test-results/jest" }]
  ]
};

