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
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";


function App() {
  const [countries, setCountries] = useState([]); //State --> Variable declaration in React
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -40.4796})
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

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

          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
          setMapCountries(data);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    //Worldwide --> https://disease.sh/v3/covid-19/all
    //Selected country --> https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode); //update the contry code in input
        setCountryInfo(data); //store the response of the country info in the variable
        setMapCenter([data.countryInfo.lat, data.countryInfo.lng]);
        setMapZoom(4);
      });
  };

  // console.log("country info", countryInfo)

  return (
    <div className="app">
      <div className="app_left">
        {/* Header - Title and Input */}
        <div className="app_header">
          <h1> Covid-19 Tracker </h1>

          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
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
          <Infobox
            title="Coronavirus Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={countryInfo.cases}
          />
          <Infobox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <Infobox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>

        {/* Map */}
        <Map 
        countries={mapCountries}
        center={mapCenter}
        zoom={mapZoom}
        />

      </div>

      <Card className="app_right">
        <CardContent>

          <h3>Live cases by country</h3>
          {/* Table */}
          <Table countries={tableData} />

          <h3>Worldwide new cases</h3>
          {/* Graph */}
                <LineGraph />

        </CardContent>
      </Card>
    </div>
  );
}

export default App;
