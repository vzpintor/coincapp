import {StyleSheet} from 'react-native';
import {palette} from '@shared/theme/palette';

export const percentageChangeStyles = StyleSheet.create({
  down: {
    color: palette.red,
  },
  up: {
    color: palette.green,
  },
});
