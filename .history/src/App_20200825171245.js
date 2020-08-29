import React, {useState} from 'react';
import {MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core";
import './App.css';

function App() {
  //State --> Variable declaration in React
const [countries, setCountries] = useState(["India","Australia","Canada"]);

  return (
    <div className="app">
      <div className="app_header">
      <h1> Covid-19 Tracker </h1>
      
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abc">
          {/* Loop thru countries for dropdown */}

          {
            countries.map(country => (
            <MenuItem value={country}>{country}</MenuItem>
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
