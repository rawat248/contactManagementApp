import React from "react";
import { useQuery } from "react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface CountryData {
  country: string;
  deaths: number;
  active: number;
  recovered: number;
  lat: number;
  long: number;
}

const fetchData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  const data = await response.json();
  return data;
};

const MapWithMarkers: React.FC = () => {
  const { data, status } = useQuery<CountryData[]>("countryData", fetchData);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const defaultPosition: [number, number] = [0, 0];
  const attribution: string =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <MapContainer
      center={defaultPosition}
      zoom={2}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={attribution}
      />
      {data.map((country) =>
        country.lat && country.long ? (
          <Marker key={country.country} position={[country.lat, country.long]}>
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
};

export default MapWithMarkers;
