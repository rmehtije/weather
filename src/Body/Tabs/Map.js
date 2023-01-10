import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import { defaultSearchParams } from "../../services/apiService";

function Map({ weatherData }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = {
    lat: weatherData?.coord.lat || defaultSearchParams.lat,
    lng: weatherData?.coord.lon || defaultSearchParams.lon,
  };

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ height: "500px", width: "500px" }}
          center={center}
          zoom={10}
        >
          <InfoWindow position={center}>
            <div>{weatherData?.main.temp}</div>
          </InfoWindow>
        </GoogleMap>
      )}
    </>
  );
}

export default Map;
