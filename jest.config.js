module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  automock: false,
  resetMocks: false,
  setupFiles: [
    './setupJest.js'
  ]
}
