import React, { useEffect, useState, useRef } from "react";
import {
  GoogleMap,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import mapStyle from "../utils/mapStyle.json";

const Map = () => {
  const containerStyle = {
    width: "360px",
    height: "300px",
  };

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [userLocation, setUserLocation] = useState(null);

  const inputRef = useRef();

  const handlePlaceChanged = () => {
    // //const [place] = inputRef.current.getPlaces();
    // if (place) {
    //   console.log(place.formatted_address);
    //   console.log(place.geometry.location.lat());
    //   console.log(place.geometry.location.lng());
    // }
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
              className="form-control relative m-0 block w-[304px] min-w-0 flex-auto bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none w-full"
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
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
