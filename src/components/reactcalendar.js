import { useState } from 'react';
import Calendar from 'react-calendar';
import render from 'react-dom';
import './reactcalendar.css';
const ReactCalendar=()=>{
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

ReactDOM.render(<ReactCalendar/>, document.querySelector('#root'));
