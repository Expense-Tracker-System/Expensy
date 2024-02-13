import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment)

const myEventsList = [
    { start: moment("2024-02-01T14:00:00").toDate(), end: moment("2024-02-01T14:00:00").toDate(), title: "special event" },
]

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      views={{month : true , week : true}}
    />
  </div>
)
export default MyCalendar;