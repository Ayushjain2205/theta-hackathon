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
import Menu from "../components/Menu";
import Link from "next/link";

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

  const [showCamera, setShowCamera] = useState(false);

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
    url: "marker6.png",
  };

  const path = [
    { lat: 12.991615786821399, lng: 77.7226173866476 },
    { lat: 12.990753313687742, lng: 77.72252081826636 },
    { lat: 12.990387398864554, lng: 77.72380827701618 },
    { lat: 12.990073754630677, lng: 77.7247309569638 },
    { lat: 12.98931055338891, lng: 77.72629736853571 },
    { lat: 12.988871414583535, lng: 77.72800327626025 },
    { lat: 12.989676396318846, lng: 77.7281427741008 },
  ];

  const polylineOptions = {
    strokeColor: "#000000", // Black color
    strokeWeight: 2, // Thickness of 1
  };

  return (
    <div className="relative">
      <div className="absolute z-50 top-[16px] left-[16px] flex flex-row space-between items-center mb-[20px] bg-transparent">
        <div
          className="flex flex-row h-[48px] w-[48px] border-[2px] border-black rounded-full items-center justify-between bg-white"
          onClick={() => {
            setShowCamera(!showCamera);
          }}
        >
          <img className="m-auto" src="arrow-left.svg" alt="" />
        </div>
      </div>
      <div className="absolute z-50 top-[16px] right-[16px] flex flex-row space-between items-center mb-[20px] bg-transparent">
        <Menu />
      </div>
      <div className="absolute z-50 top-[16px] right-[80px] flex flex-row space-between items-center mb-[20px] bg-transparent">
        <Link href="/cam">
          <div
            className={`flex flex-row h-[48px] w-[48px] border-[2px] border-black rounded-full items-center justify-between bg-white ${
              showCamera ? "animate-pulse" : ""
            }`}
          >
            <img className="m-auto" src="camera.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="absolute">
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
              position={{ lat: 12.989676396318846, lng: 77.7281427741008 }}
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
      </div>
      <div className="fixed z-50 bottom-0 w-full">
        <div className="flex flex-row p-[16px] justify-between">
          <div className="flex flex-row items-center justify-center bg-white w-[95px] h-[48px] border-[2px] border-black rounded-[20px] gap-[14px]">
            <img
              className="opacity-30 transform rotate-90"
              src="corner-down-right.svg"
              alt=""
            />
            <img src="corner-down-right.svg" alt="" />
          </div>
          <div className="flex flex-row items-center justify-center bg-white w-[141px] h-[48px] border-[2px] border-black rounded-[20px]">
            1km away
          </div>
        </div>
        <div className=" bg-white border-[2px] border-black rounded-tl-[15px] rounded-tr-[15px] p-[24px] pb-[16px]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[10px]">
              <img src="location.svg" alt="" />
              <p className="text-[22px] font-bold">Route to monastery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
