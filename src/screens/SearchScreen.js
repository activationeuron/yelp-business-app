import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/Searchbar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
const SearchScreen = ({navigation}) => {
  console.log(navigation);
  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useResults();

  const filterResultByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSumbit={() => searchApi()}
      />
      <ScrollView>
        <ResultList
          navigation={navigation}
          results={filterResultByPrice('$')}
          title="cost effective"
        />
        <ResultList
          navigation={navigation}
          results={filterResultByPrice('$$')}
          title="bit Pricier"
        />
        <ResultList
          navigation={navigation}
          results={filterResultByPrice('$$$')}
          title="Big Expenser"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
