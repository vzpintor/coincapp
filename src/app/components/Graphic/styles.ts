import {StyleSheet} from 'react-native';

export const graphicStyles = StyleSheet.create({
  graphContainer: {
    height: 450,
    padding: 20,
    flexDirection: 'row',
  },
  chart: {
    flex: 1,
    marginLeft: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  button: {
    padding: 8,
    borderRadius: 5,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
