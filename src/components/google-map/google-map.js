import React from "react";
import {
    GoogleMap,
    useLoadScript
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
    width: `100%`,
    height: `100%`
};

const center = {
lat: 55.755825,
    lng: 37.617298
};
export default function MyMap () {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
       libraries
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps"
    return (
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}> </GoogleMap>
    )
}
