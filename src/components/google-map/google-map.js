// import React from "react";
// import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
//
// export const Map = () => {
//     return (
//         <GoogleMap
// defaultZoom={10}
// defaultCenter={{lat: 55.755825 , lng : 37.617298}}
//         />
//     )
// };
//
// export const WrappedMap = withScriptjs(withGoogleMap(Map))
//
// export const MapBlock = () => {
//     return (
//     <section className="our-contacts__map">
//         КАРТА ТУТ
//     </section>
//     )
// };
import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import {formatRelative} from "date-fns";

export default function App () {
    const {} = useLoadScript({
        googleMapsApiKey: process.env.Reac
    })
}
