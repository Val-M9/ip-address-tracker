import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.css';

const Map = ({ lat, lng }) => {
  const position = [lat, lng];

  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='map'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    
  );
};

export { Map };
