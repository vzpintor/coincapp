import React, {useEffect} from 'react';
import {TextInput, View} from 'react-native';
import SearchIcon from '@components/icons/SearchIcon';
import {searchStyles} from '@components/Search/styles';
import useDebounce from '@hooks/useDebounce';
import {SearchProps} from '@components/Search/props';

const Search = ({onChange}: SearchProps) => {
  const [value, setValue] = React.useState('');

  const debounce = useDebounce(value);

  useEffect(() => {
    onChange(debounce);
  }, [debounce]);

  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.icon}>
        <SearchIcon width={30} height={30} />
      </View>
      <View style={searchStyles.inputContainer}>
        <TextInput
          autoCapitalize={'none'}
          style={searchStyles.input}
          onChangeText={setValue}
          value={value}
        />
      </View>
    </View>
  );
};

export default Search;
