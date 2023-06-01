import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";
import mapStyle from "../utils/mapStyle.json";

const Map = () => {
  const containerStyle = {
    width: "360px",
    height: "300px",
    borderRadius: "10px",
  };

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: 12.991631467943384,
    lng: 77.72263884440964,
  });

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  const options = {
    disableDefaultUI: true,
    clickableIcons: false,
    styles: mapStyle,
  };

  const onMapDragEnd = () => {
    if (map !== null) {
      const center = map.getCenter();
      setCenter({ lat: center.lat(), lng: center.lng() });
    }
  };

  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={options}
          onDragEnd={onMapDragEnd}
        >
          <MarkerF
            position={{ lat: 12.990685369183215, lng: 77.72153376532083 }}
            icon={{ url: "profilemarker1.png" }}
          />
          <MarkerF
            position={{ lat: 12.990350815676113, lng: 77.72336839308822 }}
            icon={{ url: "profilemarker2.png" }}
          />
          <MarkerF
            position={{ lat: 12.992467788229751, lng: 77.72305730569633 }}
            icon={{ url: "profilemarker3.png" }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
