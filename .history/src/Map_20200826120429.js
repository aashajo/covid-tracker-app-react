import React from 'react';
import './Map.css';
import {Map as LeafletMap, TileLayer} from "react-leaflet";

function Map({countrie, center, zoom}) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Loop thru and draw circle based on number of cases*/}
                
            </LeafletMap>
            
        </div>
    )
}

export default Map
