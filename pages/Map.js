import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import mapStyle from "../utils/mapStyle.json";
import debounce from "lodash.debounce";

const Map = () => {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    let watchId;

    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log("Error retrieving location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    return () => {
      if (navigator.geolocation) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

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

  const debouncedDirectionsCallback = debounce((result) => {
    if (result !== null) {
      setDirections(result);
    }
  }, 500); // Adjust the debounce delay as needed (e.g., 500ms)

  const directionsCallback = (result) => {
    debouncedDirectionsCallback(result);
  };

  const onMapDragEnd = () => {
    if (map !== null) {
      const center = map.getCenter();
      setCenter({ lat: center.lat(), lng: center.lng() });
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={userLocation}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
      onDragEnd={onMapDragEnd}
    >
      <Marker position={userLocation} />
      <Marker position={{ lat: 12.988811268659669, lng: 77.73703548544916 }} />

      {/* {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            suppressMarkers: true,
            preserveViewport: true,
          }}
        />
      )}

      <DirectionsService
        options={{
          destination: { lat: 12.988811268659669, lng: 77.73703548544916 },
          origin: userLocation,
          travelMode: "WALKING",
        }}
        callback={directionsCallback}
      /> */}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
