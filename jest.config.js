const {defaults} = require('jest-config');

module.exports = {
    "roots": [
      "./src"
    ],
    "preset": "ts-jest",
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [...defaults.moduleFileExtensions, 'conf'],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupTestFrameworkScriptFile": "./src/setupTests.ts"
  }
