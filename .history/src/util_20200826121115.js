import React from "react";
import numeral from "numeral";
import {Circle, Popup} from "react-leaflet";

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        rgb: "rgb(204,16,52)",
        multiplier: 800
    },
    recovered: {
        hex: "#7dd71d",
        rgb: "rgb(125,215,29)",
        multiplier: 1200
    },
    deaths: {
        hex: "#fb4443",
        rgb: "rgb(251, 68, 67)",
        multiplier: 2000
    },

}

export const sortData = (data) => {
    const sortedData = [...data]

    return sortedData.sort((a,b) => (a.cases > b.cases ? -1 : 1))
    return sortedData;
}


//Draw circles on Map with interactive tooltip
export const showDataOnMap = (data, casesType="cases") => 
    data.map(country => (
        <Circle 
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier }
        >
            <Popup>
                <h1>Popup!</h1>
            </Popup>

        </Circle>
    ))
