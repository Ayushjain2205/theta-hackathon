import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerF,
  DirectionsService,
  DirectionsRenderer,
  PolylineF,
} from "@react-google-maps/api";
import mapStyle from "../utils/mapStyle.json";
import debounce from "lodash.debounce";

const Map = () => {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  // });

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

  const libraries = ["places", "geometry", "drawing"];

  const selfMarker = {
    url: "me.png",
  };

  const nftMarker = {
    url: "nft.png",
  };

  const path = [
    { lat: 12.991615786821399, lng: 77.7226173866476 },
    { lat: 12.988811268659669, lng: 77.73703548544916 },
  ];

  const polylineOptions = {
    strokeColor: "#000000", // Black color
    strokeWeight: 2, // Thickness of 1
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
        onDragEnd={onMapDragEnd}
      >
        <MarkerF position={userLocation} icon={selfMarker} />
        <MarkerF
          position={{ lat: 12.988811268659669, lng: 77.73703548544916 }}
          icon={nftMarker}
        />

        <PolylineF path={path} options={polylineOptions} />

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
    </LoadScript>
  );
};

export default Map;
