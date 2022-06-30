import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import React from "react";
import moment from "moment";
export default function DateRangeComponent({ mainDataObj, setMainDataObj }) {
  
  const [state, setState] = React.useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  });
  const handleChange = (item) => {
    // console.log(item, "$$$$$$$$$");
    const data = {
      startDate: moment(item.selection.startDate).format("YYYY-MM-DD"),
      endDate: moment(item.selection.endDate).format("YYYY-MM-DD"),
    };
    setState({ ...state, ...item });
    setMainDataObj({ ...mainDataObj, profileFreshness: data });
  };

  return (
    <div>
      <DateRangePicker
        className="adsfasdfadsf"
        // onChange={(item) => setState({ ...state, ...item })}
        onChange={(item) => handleChange(item)}
        months={1}
        minDate={addDays(new Date(), -300)}
        maxDate={addDays(new Date(), 900)}
        direction="vertical"
        scroll={{ enabled: true }}
        ranges={[state.selection]}
      />
    </div>
  );
}
