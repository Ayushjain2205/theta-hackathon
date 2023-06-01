import React, { useEffect, useState, useRef } from "react";
import {
  GoogleMap,
  StandaloneSearchBox,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";

import mapStyle from "../utils/mapStyle.json";

const Map = () => {
  const [showMarker, setShowMarker] = useState(false);

  const containerStyle = {
    width: "360px",
    height: "300px",
    borderRadius: "10px",
  };

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: 13.36889099276842,
    lng: 77.68467853318361,
  });
  const [userLocation, setUserLocation] = useState(null);

  const inputRef = useRef();

  const handlePlaceChanged = () => {
    setShowMarker(true);
  };

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
        libraries={["places"]}
      >
        <div className="relative mb-4 flex flex-wrap w-[358px] h-[48px] border-black border-[2px] rounded-[8px] items-center">
          <StandaloneSearchBox
            onLoad={(ref) => (inputRef.current = ref)}
            onPlacesChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder=""
              className="relative m-0 block w-[304px] min-w-0 flex-auto bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none"
            />
          </StandaloneSearchBox>
          <span className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
            <img src="search.svg" alt="" />
          </span>
        </div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={options}
          onDragEnd={onMapDragEnd}
        >
          <MarkerF
            position={{ lat: 3.36889099276842, lng: 77.68467853318361 }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
