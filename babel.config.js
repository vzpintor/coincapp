module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './app/components',
          '@hooks': ['./app/hooks'],
          '@navigation': './app/navigation',
          '@redux': ['./app/redux'],
          '@screens': ['./app/screens'],
          '@shared': ['./app/shared', './app/shared/interfaces'],
          '@utils': ['./app/shared/utils'],
          '@environment': ['./environment'],
          '@assets': ['./assets'],
        },
      },
    ],
  ],
};
