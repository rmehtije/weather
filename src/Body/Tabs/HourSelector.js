import { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useDispatch } from "react-redux";
import { setForecastSelectedData } from "../../services/stateService";

// V kazhdyj komponent mozhno peredat' properties seldushim obrazom: 
// <Komponent props1="1" props2={const} />
// Prinemajem v komponente properties kak my prinemajem argumenty v ljuboj funkcqii. tojest v skobkah deklariruem 
// peremennuju function Komponent(props). 
// Vse peredannye properties v komponent sobirajutsa v object. 
// Vnutri komponenta properties nevozmozhno izmenit'.

// V kazhdom komponente jest svojo sostojanie.
// Sostojanie eto vnutrennie dannye komponenta.
// Dlja raboty s sostajaniem my ispolzujem react hook useState.
// V useState my peredajom iznachal'noe znachenija sostojanija. (null)
// useState hook vozvroshajet massive iz dvuh svojstv.
// 1 Peremennaja kotoraja soderzhqt v sebe znachenije peredannoe v useState
// 2 Funkcqja kotoraja menjajet pervoe znachenije ili sostojanie
// Pri zapuske izmenija sostojanija komponent pererisovajetsja i novoe znachenije v sostojanie peredajotsa

// vse react hooki nachniajusa so slova 'use'.
// vse izmenjajushie sostojanije funkcqii nachniajutsa s slova 'set'.


function HourSelector({ hours }) {
  
  const [selectedHour, setSelectedHour] = useState(0);
  console.log('HourSelector', hours);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('HourSelector useEffect');
    if (hours.length) {
      
      dispatch(setForecastSelectedData(hours[0].item));
      setSelectedHour(hours[0].hour);
    }
  }, [hours, dispatch, setSelectedHour]);

  const handleOnChangeHours = (hour, item) => {
    console.log('handleOnChangeHours');
    setSelectedHour(hour);
    dispatch(setForecastSelectedData(item));
  };

  return (
    <ButtonGroup className="w-100">
      {hours.map(({ hour, item }, idx) => (
        <ToggleButton
          key={idx}
          id={`hour-${idx}`}
          type="radio"
          variant="outline-primary"
          name="hour"
          value={hour}
          checked={hour === selectedHour}
          onChange={() => handleOnChangeHours(hour, item)}
        >
          {hour}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

export default HourSelector;
