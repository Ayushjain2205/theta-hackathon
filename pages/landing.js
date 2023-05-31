import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, MarkerF } from "@react-google-maps/api";
import mapStyle from "../utils/mapStyle.json";
import debounce from "lodash.debounce";

const Landing = () => {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  const [isVisible, setIsVisible] = useState(false);

  const toggleFooter = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

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
    <div className="relative">
      <div className="absolute z-50 top-[16px] left-[16px] flex flex-row space-between items-center mb-[20px] bg-transparent">
        <div className="flex flex-row h-[48px] w-[48px] border-[2px] border-black rounded-full items-center justify-between bg-white">
          <img className="m-auto" src="arrow-left.svg" alt="" />
        </div>
      </div>
      <div className="absolute z-50 top-[16px] right-[16px] flex flex-row space-between items-center mb-[20px] bg-transparent">
        <div className="flex flex-row h-[48px] w-[48px] border-[2px] border-black rounded-full items-center justify-between bg-white">
          <img className="m-auto" src="menu.svg" alt="" />
        </div>
      </div>
      <div className="absolute">
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          libraries={libraries}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={userLocation}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={options}
            onDragEnd={onMapDragEnd}
          >
            <MarkerF
              position={{ lat: 12.988811268659669, lng: 77.73703548544916 }}
              icon={{ url: "marker1.png" }}
              onClick={toggleFooter}
            />
            <MarkerF
              position={{ lat: 12.990272394175268, lng: 77.72336841608833 }}
              icon={{ url: "marker2.png" }}
              onClick={toggleFooter}
            />
            <MarkerF
              position={{ lat: 12.992467788229751, lng: 77.72305730569633 }}
              icon={{ url: "marker3.png" }}
              onClick={toggleFooter}
            />
            <MarkerF
              position={{ lat: 12.990627860040751, lng: 77.71954895978364 }}
              icon={{ url: "marker4.png" }}
              onClick={toggleFooter}
            />
            <MarkerF
              position={{ lat: 12.98792005100768, lng: 77.72034828593733 }}
              icon={{ url: "marker5.png" }}
              onClick={toggleFooter}
            />
            <MarkerF
              position={{ lat: 12.995189580537783, lng: 77.72114005664278 }}
              icon={{ url: "marker6.png" }}
              onClick={toggleFooter}
            />
            <MarkerF
              position={{ lat: 12.986412448243797, lng: 77.72702641492478 }}
              icon={{ url: "marker7.png" }}
              onClick={toggleFooter}
            />
            <MarkerF
              position={{ lat: 12.98554898882198, lng: 77.71821120868368 }}
              icon={{ url: "marker8.png" }}
              onClick={toggleFooter}
            />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="absolute z-50 bottom-[2px] left-[16px] flex flex-row space-between items-center mb-[20px] bg-transparent">
        <div className="flex flex-row h-[48px] w-[48px] border-[2px] border-black rounded-full items-center justify-between bg-white">
          <img className="m-auto" src="arrow-left.svg" alt="" />
        </div>
      </div>
      <footer
        className={`bottom-bar fixed z-50 bottom-0 w-full bg-white border-[2px] border-black rounded-tl-[15px] rounded-tr-[15px] p-[24px] transform ${
          isVisible ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-out`}
      >
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <img src="bottom.svg" alt="" />
            </div>
            <div className="flex flex-col gap-[5px] ml-[10px]">
              <p className="text-[20px] font-bold">Route to monastery</p>
              <div className="flex flex-row">
                <img src="location.svg" alt="" />
                <p className="text-[16px]">1 km away</p>
              </div>
              <p className="text-[16px]">
                Owned by{" "}
                <span className="underline text-[#007BFF]">0xCafa93....</span>
              </p>
              <p className="w-[187px] text-[14px]">
                Grab the route collectible first. Find the next at the
                destination.
              </p>
            </div>
          </div>
          <button className="box-border w-[342px] h-[48px] inline-flex items-center justify-center rounded-[15px] bg-[#0FA958] px-[15px] leading-none focus:outline-none mt-[10px] border-black border-[2px]">
            Grab
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
