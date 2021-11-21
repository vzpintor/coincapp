import {ViewStyle} from 'react-native';

export const offsets = {
  none: 0,
};

export type KeyboardOffsets = keyof typeof offsets;

export const presets = {
  fixed: {
    outer: {
      backgroundColor: 'white',
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },

  scroll: {
    outer: {
      backgroundColor: 'white',
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {justifyContent: 'flex-start', alignItems: 'stretch'} as ViewStyle,
  },
};

export type ScreenPresets = keyof typeof presets;

export function isNonScrolling(preset?: ScreenPresets) {
  return !preset || !presets[preset] || preset === 'fixed';
}
