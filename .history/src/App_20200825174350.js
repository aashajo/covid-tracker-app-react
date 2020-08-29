import React, {useState, useEffect} from 'react';
import {MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core";
import './App.css';

function App() {
  //State --> Variable declaration in React
const [countries, setCountries] = useState([]);

//https://disease.sh/v3/covid-19/countries

//useEffect --> Runs a set of code based on given condition
//Code inside useEffect will run once when the component loads and not again
useEffect(() => {
  //async - send a req, wait for it then do somthing
  const getCountriesData = async () => {
    await fetch ("https://disease.sh/v3/covid-19/countries")
    .then((response)=> response.json())
    .then((data) => {
      const countries = data.map((country)=>(
        {
          name: country.country, // United States, United Kingdom
          value: country.countryInfo.iso2 // UK, USA, FR
        }
      ));

      setCountries(countries)
    })
  }

  getCountriesData();
}, []);

  return (
    <div className="app">
      <div className="app_header">
      <h1> Covid-19 Tracker </h1>
      
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abc">
          {/* Loop thru countries for dropdown */}

          {
            countries.map(country => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
            ))
          }

        {/* <MenuItem value="worldwide">Worldwide</MenuItem>
        <MenuItem value="worldwide">Option 2</MenuItem>
        <MenuItem value="worldwide">Option 3</MenuItem>
        <MenuItem value="worldwide">Option 4</MenuItem> */}
        </Select>
      </FormControl>
      </div>
      
      {/* Header - Title and Input */}

      {/* Info Box */}

      {/* Table */}

      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
