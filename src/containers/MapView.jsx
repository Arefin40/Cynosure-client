import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = () => {
   const position = [40.791232, -73.883431];
   return (
      <MapContainer
         center={position}
         zoom={13}
         scrollWheelZoom={false}
         className="w-full min-h-32 aspect-video lg:aspect-auto border"
      >
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
   );
};
export default MapView;
