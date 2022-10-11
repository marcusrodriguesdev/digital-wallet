module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '**/*.d.ts',
    '!<rootDir>/src/**/index.{ts,tsx}',
    '!<rootDir>/src/**/Router.{ts,tsx}',
    '!<rootDir>/src/**/*.stories.tsx',
    '!<rootDir>/src/**/*.styles.tsx',
    '!<rootDir>/src/**/tests/**/*',
    '!<rootDir>/src/**/container/**/*'
  ],
  moduleDirectories: ['node_modules', 'src'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  }
}
