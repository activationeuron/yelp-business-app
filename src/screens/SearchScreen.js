import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/Searchbar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useResults();

  const filterResultByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={{flex: 1}}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSumbit={() => searchApi()}
      />
      <ScrollView>
        <ResultList results={filterResultByPrice('$')} title="cost effective" />
        <ResultList results={filterResultByPrice('$$')} title="bit Pricier" />
        <ResultList results={filterResultByPrice('$$$')} title="Big Expenser" />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
