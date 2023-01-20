import { useCallback } from "react";
import moment from "moment";
import DaySelector from "./DaySelector";

function TimeSelector({ data }) {
  console.log('TimeSelector');

  // useCallback eto react hook kotoryj pomogajet optimizirovat' rabotu funkcqj.
  // useCallback my peredajom funkcqju kotoruju my hotim zapomnit' i zapuskat' tolko pri neobhodimosti.
  // Pri zapuske etoj funkcqii zapominajetsa takzhe jejo otvet. 
  // useCallback prinemajet spisok zavisimostej kak vtoroj argument.
  // Jesli eta funkcqja pereispolzujetsa gde libo i v zavisimostjah net izmenenij to funkcqja zanogo ne obrabatqvajetsa
  // useCallback zapominajet vsjo 4to proizoshlo v njom i peredajot eto tomu kto vqzval.
  
  const getCurrentData = useCallback(
    (cbFn) => {
      data?.list.forEach((item) => {
        const timestamp = item.dt;
        const momentDate = moment.unix(timestamp);

        const day = momentDate.format("DD");
        const hour = momentDate.format("HH:mm");

        cbFn(item, day, hour);
      });
    },
    [data]
  );

  return (
    <>
      <DaySelector
        data={data}
        getCurrentData={getCurrentData}
      />
    </>
  );
}

export default TimeSelector;
