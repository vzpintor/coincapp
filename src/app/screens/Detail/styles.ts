import {StyleSheet} from 'react-native';

export const detailScreenStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  brandContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandNameContainer: {
    alignItems: 'center',
  },
  brandName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  changeContainer: {
    flex: 1,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  percentage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
