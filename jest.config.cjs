module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
};
