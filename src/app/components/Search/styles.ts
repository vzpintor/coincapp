import {StyleSheet} from 'react-native';

export const searchStyles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  icon: {
    paddingLeft: 10,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
});
