module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    collectCoverage: true,
    "testMatch": [
        "<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}",
        "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
    ]
}