import { useEffect, useState } from "react";
import TimeSelector from "./TimeSelector";
import Data from "./Data";
import Map from "./Map";
import { getForecast } from "../../services/apiService";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "../../services/stateService";

function Forecast() {
  console.log('Forecast');
  const [forecastData, setForecastData] = useState(null);

  const searchParams = useSelector((state) => state.searchParams);
  const forecastSelectedData = useSelector((state) => state.forecastSelectedData);

  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        const response = await getForecast(searchParams);
        const data = await response.json();

        if (+data.cod !== 200) throw Error(data.message);

        setForecastData(data);
        console.log('DATA recieved Forecast');
      } catch(error) {
        dispatch(setErrorMessage(error.message));
      }
      
    })();
  }, [dispatch, searchParams]);

  const weatherData = forecastData ? {
    ...forecastData?.list[0],
    coord: forecastData?.city.coord,
  } : null;

  return (
    <>
      <TimeSelector
        data={forecastData}
      />
      
      <Data data={forecastSelectedData || weatherData} />

      <Map weatherData={forecastSelectedData || weatherData} />
    </>
  );
}

export default Forecast;
