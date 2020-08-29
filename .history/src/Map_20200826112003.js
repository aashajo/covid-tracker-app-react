import React from 'react'
import {Map as LeafletMap, TileLayer} from "react-leaflet"

function Map() {
    return (
        <div className="map">
            <LeafletMap>
                <TitleLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </LeafletMap>
            <h1>Map !</h1>
            
        </div>
    )
}

export default Map
