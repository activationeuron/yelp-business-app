import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [term, setTerm] = useState('a');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, error];
};
