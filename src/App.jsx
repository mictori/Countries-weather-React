import { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesList from './Components/CountriesList';

const App = () => {
	const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all';
	const [searchValue, setSearchValue] = useState('');
  const [countriesData, setCountriesData] = useState([])
  let matchedCountries = []

  const handleChangeInput = (event) => {
    event.target.value
    ? setSearchValue(event.target.value)
    : setSearchValue('')
  }
  console.log('value', searchValue);
  
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setCountriesData(response.data)
      })
    }, [])
    console.log('countries', countriesData);
    

    if (searchValue) {
      matchedCountries = countriesData.filter((c) => c.name.common.toLowerCase().includes(searchValue.toLowerCase()))
      console.log('matched', matchedCountries);
    }

	return (
		<div>
			<h1>Countries search</h1>
			<div>
				<label htmlFor='search'><span className='bold'>find countries</span></label>
				<input id='search' value={searchValue} onChange={handleChangeInput} placeholder='search...'></input>
			</div>
      <CountriesList countries={matchedCountries} countryToShow={setSearchValue}/>
		</div>
	);
};

export default App;
