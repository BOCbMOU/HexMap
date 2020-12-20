module.exports = {
  collectCoverageFrom: ['src/**/*.ts', '!**/*.d.*'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  roots: ['.'],
  testRegex: '\\.test\\.ts$',
  transform: { '^.+\\.ts$': 'ts-jest' },
  preset: 'ts-jest',
};
