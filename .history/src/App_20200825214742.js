import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import "./App.css";
import Infobox from "./Infobox";
import Map from "./Map";

function App() {
  const [countries, setCountries] = useState([]); //State --> Variable declaration in React
  const [country, setCountry] = useState("worldwide");
  useEffect(() => {
    //useEffect --> Code inside useEffect will run once when the component loads and not againRuns a set of code based on given condition
    const getCountriesData = async () => {
      //async - send a req, wait for it then do somthing
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // United States, United Kingdom
            value: country.countryInfo.iso2, // UK, USA, FR
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    setCountry(countryCode);
  }

  return (
    <div className="app">
      {/* Header - Title and Input */}
      <div className="app_header">
        <h1> Covid-19 Tracker </h1>

        <FormControl className="app_dropdown">
          <Select variant="outlined" onChange= {onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {/* Loop thru countries for dropdown */}
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Info Box */}
      <div className="app_stats">
              <Infobox title="Coronavirus Cases" cases={123} total={2000} />
              <Infobox title="Recovered" cases={234} total={3000} />
              <Infobox title="Deaths" cases={456} total={4000} />
      </div>

      {/* Table */}

      {/* Graph */}


      {/* Map */}
    </div>
  );
}

export default App;