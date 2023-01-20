import { useState, useEffect } from "react";
import Map from "./Map";
import { getWeather } from "../../services/apiService";
import Data from "./Data";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "../../services/stateService";

function Now() {
  console.log('Now');
  const [weatherData, setWeatherData] = useState(null);
  
  const searchParams = useSelector((state) => state.searchParams);

  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        // Zaprosy na server i pri udachnom rasklade vozvrashajut Response object.
        // etot object hranit v sebe status i mnogoe drugoe.
        // takzhe hranit dannye v bufere. 
        const response = await getWeather(searchParams);

        // json() funkcqja berjot etot bufer i prevrashajet jego v js object.
        const data = await response.json();

        if (data.cod !== 200) throw Error(data.message);

        setWeatherData(data);
        console.log('DATA recieved Now');
      } catch (error) {
        console.log(error);
        dispatch(setErrorMessage(error.message));
      }
    })();
  }, [dispatch, searchParams]);

  return (
    <>
      <Data data={weatherData} />
      <Map weatherData={weatherData} />
    </>
  );
}

export default Now;
