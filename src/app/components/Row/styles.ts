import {StyleSheet} from 'react-native';

export const rowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  brand: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetName: {
    marginLeft: 20,
  },
  numeralContainer: {
    alignItems: 'flex-end',
  },
  change: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
