import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";


const options = {
    legend: {
        display: false,
    },
    element: {
        point:{
            radius: 0,
        }
    }
}

function LineGraph() {
  const [data, setData] = useState({});

  const buildChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint;

    for(let date in data.cases){
        if(lastDataPoint){
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint
            }
            chartData.push(newDataPoint)
        }
        lastDataPoint = data[casesType][date]
    })
    return chartData;
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((response) => response.json())
      .then((data) => {
        const chartData = buildChartData(data, "cases");
        setData(chartData);
      });
  }, []);

 

  return (
    <div>
      <h1>Graph!!!</h1>
      <Line 
      options={options}
      data={{datasets: [
          {
          backgroundColor: "rgba(204, 16, 52, 0.5)",
          borderCOlor: "#CC1034",
          data: data}
          ]}} />
    </div>
  );
}

export default LineGraph;
