module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module",
    plugins: [
      'react',
      'babel',
    ],
  },
};
