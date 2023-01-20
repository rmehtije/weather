import { useCallback } from "react";
import moment from "moment";
import DaySelector from "./DaySelector";

function TimeSelector({ data }) {
  console.log('TimeSelector');
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
