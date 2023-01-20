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
        const response = await getWeather(searchParams);
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
