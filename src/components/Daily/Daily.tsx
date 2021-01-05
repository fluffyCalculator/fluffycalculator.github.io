import React, { useContext } from "react";
import { DailyContext } from "./Context";
import Box, { WeekBox } from "./Box";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function Daily() {
  const { dailies } = useContext(DailyContext);

  console.log("rendered dailies");
  return (
    <div className="flex justify-center">
      <div className="grid gap-2 grid-cols-7 my-10">
        {days.map((x, idx) => {
          return <WeekBox key={idx} text={x}></WeekBox>;
        })}
        {dailies.map((x, idx) => {
          return <Box object={x} key={idx}></Box>;
        })}
      </div>
    </div>
  );
}

export default Daily;
