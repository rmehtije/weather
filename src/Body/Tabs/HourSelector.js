import { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function HourSelector({ setCurrentData, hours }) {
  const [selectedHour, setSelectedHour] = useState(0);

  useEffect(() => {
    if (hours.length) {
      setCurrentData(hours[0].item);
      setSelectedHour(hours[0].hour);
    }
  }, [hours, setCurrentData, setSelectedHour]);

  const handleOnChangeHours = (hour, item) => {
    setSelectedHour(hour);
    setCurrentData(item);
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
