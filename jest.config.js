module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/test/$1"
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/test/**/*.test.(ts|js)"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "deploy/"]
}
