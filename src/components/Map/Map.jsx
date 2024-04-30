import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./map.css";
import logoPath from "../../assets/logosBrand/leafLogo.png";

export const Map = () => {
  return (
    <MapContainer
      center={[51.08794, 17.01055]}
      zoom={17}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.08794, 17.01055]}>
        <Popup>
          <div className="leaflet-popup-content">
            <img src={logoPath} alt="logo lipna.ink" />
            <p>
              Lipna tattoo studio
              <br />
              czekam na Ciebie!
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
