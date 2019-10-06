import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
const SearchBar = ({term, onTermChange, onTermSumbit}) => {
  return (
    <View style={styles.background}>
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSumbit(term)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
  },
});

export default SearchBar;
