import { useState } from 'react';
import Calendar from 'react-calendar';
import './reactcalendar.css';
const Booking=()=>{
 const [date,setDate] = useState(new Date());
 const onChange = date => {
    setDate(date);
  };
    return(
        <>
        <div className='
        cal'>
        <Calendar className="calendar" onChange={onChange} value={date}/>
        </div>
        </>
    );
};
export default Booking;


