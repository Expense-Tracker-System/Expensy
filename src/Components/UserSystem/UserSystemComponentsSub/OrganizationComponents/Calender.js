import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import Reminderset from "./Reminderset";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    start: moment("2024-02-27T14:00:00").toDate(),
    end: moment("2024-02-27T14:00:00").toDate(),
    title: "Birthday",
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
  // {
  //   start: moment("Feb 15 2024").toDate(),
  //   end: moment("Feb 15 2024").toDate(),
  //   title: "special event",
  // },
];

const MyCalendar = (props) => {
  const [rdate,setrdate] = useState("");
  const [open, setOpen] = useState(false);

  const handlePopup = (event) => {
    const selectedDate = moment(event.start).format('MMMM D,YYYY');;
    console.log(selectedDate);
    setrdate(selectedDate)
    setOpen(true);
    console.log("shdcjg")
  
  };
  return (
    <div><Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectSlot={handlePopup}
        style={{ height: 500 }}
        views={{ month: true }}
      />

      <Reminderset rdate={rdate} open={open} setOpen={setOpen} />
    </div>
  );
};
export default MyCalendar;
