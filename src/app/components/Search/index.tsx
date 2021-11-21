import React from 'react';
import {TextInput, View} from 'react-native';
import SearchIcon from '@components/icons/SearchIcon';
import {searchStyles} from '@components/Search/styles';

const Search = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.icon}>
        <SearchIcon width={30} height={30} />
      </View>
      <View style={searchStyles.inputContainer}>
        <TextInput
          style={searchStyles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
};

export default Search;
