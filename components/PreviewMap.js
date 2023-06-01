import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";
import mapStyle from "../utils/mapStyle.json";

const PreviewMap = () => {
  const containerStyle = {
    width: "360px",
    height: "186px",
    borderRadius: "10px",
    marginTop: "10px",
  };

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: 13.368885773822607,
    lng: 77.6846678044396,
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
            position={{ lat: 13.368885773822607, lng: 77.6846678044396 }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default PreviewMap;
