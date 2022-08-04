import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../App.css'

export default function MapDetails({data, location}) {

    return (
        <MapContainer center={data} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> EventStage'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={data}>
                <Popup>
                    {location}
                </Popup>
            </Marker>
        </MapContainer>
    )
}