import { useEffect } from "react";
import TimeSelector from "./TimeSelector";
import Map from "./Map";
import { getForecast } from "../../services/apiService";

function Forecast() {

    useEffect(() => {
        (async function () {
            const weather = await getForecast();
            const response = await weather.json();
            // console.log('response', response);
        })()
    }, []);

    return (
        <>
            <TimeSelector id="forcast" />
            <Map />
        </>
    );
}

export default Forecast;