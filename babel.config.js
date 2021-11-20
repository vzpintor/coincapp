module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/app/components',
          '@hooks': ['./src/app/hooks'],
          '@navigation': './src/app/navigation',
          '@redux': ['./src/app/redux'],
          '@screens': ['./src/app/screens'],
          '@shared': ['./src/app/shared', './src/app/shared/interfaces'],
          '@utils': ['./src/app/shared/utils'],
          '@environment': ['./src/environment'],
          '@assets': ['./src/assets'],
          '@services': ['./src/app/services'],
        },
      },
    ],
  ],
};
