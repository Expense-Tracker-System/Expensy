import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import Reminderset from "./Reminderset";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    start: moment("2024-02-01T14:00:00").toDate(),
    end: moment("2024-02-01T14:00:00").toDate(),
    title: "special event",
  },
  {
    start: moment("2024-02-01T14:00:00").toDate(),
    end: moment("2024-02-01T14:00:00").toDate(),
    title: "special event",
  },
  {
    start: moment("2024-02-01T14:00:00").toDate(),
    end: moment("2024-02-01T14:00:00").toDate(),
    title: "special event",
  },
];

const MyCalendar = (props) => {
  const [open, setOpen] = useState(false);

  const handlePopup = () => {
    setOpen(true);
    console.log("shdcjg")
  };
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectSlot={handlePopup}
        style={{ height: 500 }}
        views={{ month: true, week: true }}
      />

      <Reminderset open={open} setOpen={setOpen} />
    </div>
  );
};
export default MyCalendar;
