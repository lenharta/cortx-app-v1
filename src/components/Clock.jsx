import { useEffect, useState } from "react";
import { setTodaysDate } from "../utils/dateConfig";
import Icons from "./assets/Icons";

const Clock = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(setTodaysDate());
  }, [date]);

  console.log(date);

  return (
    <div className="Clock">
      <Icons name="Calendar" />
      <h2 className="Clock__date">{date}</h2>
    </div>
  );
};
export default Clock;
