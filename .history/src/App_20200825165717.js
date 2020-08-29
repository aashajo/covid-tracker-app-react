import React from 'react';
import {MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1> Covid-19 Tracker </h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abc">
        <MenuItem value="worldwide">Worldwide</MenuItem>
        <MenuItem value="worldwide">Option 2</MenuItem>
        <MenuItem value="worldwide">Option 3</MenuItem>
        <MenuItem value="worldwide">Option 4</MenuItem>
        </Select>
      </FormControl>
      {/* Header - Title and Input */}

      {/* Info Box */}

      {/* Table */}

      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
