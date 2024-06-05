import { useState } from 'react';
import Calendar from 'react-calendar';
import './reactcalendar.css';
import { Player } from '@lottiefiles/react-lottie-player';
const Booking=()=>{
 const [date,setDate] = useState(new Date());
 const onChange = date => {
    setDate(date);
  };
    return(
        <>
        <div className='book-container'>
        <div className='booking'> <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

<Player autoplay loop src="https://lottie.host/ec5ddf24-f2fe-4d3c-8b1f-9081e25f621d/hx6QZ2T3AF.json" background="transparent" speed="1" style={{width: '150px', height: '200px'}}> </Player><h1>Book An Appointment</h1></div>
       <div className='book'>
      <h2>Select an appropriate date</h2>
        </div>
        <div className='
        cal'>
        <Calendar className="calendar" onChange={onChange} value={date}/>
        </div>
        </div>
        </>
    );
};
export default Booking;


