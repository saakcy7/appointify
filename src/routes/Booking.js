import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Player } from '@lottiefiles/react-lottie-player';
import Notification from './Notification';
import { navigate,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Booking() {
  const [user,setUser]=useState([]);
  const navigate=useNavigate();
  const HandleBooking = (event) => {
    event.preventDefault();
    navigate('/notification');
    toast.success("Appointment booked successfully!");
  }

  return (
    <>
           <div className='booking'> <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

<Player autoplay loop src="https://lottie.host/ec5ddf24-f2fe-4d3c-8b1f-9081e25f621d/hx6QZ2T3AF.json" background="transparent" speed="1" style={{width: '150px', height: '200px'}}> </Player><h1>Book An Appointment</h1></div>
<i class="fa-regular fa-bell" onClick={()=>{navigate('/notification')}}></i>
      <div className='book'>
        <h2>Select an appropriate date</h2>
    </div>
    <form onSubmit={(event) => HandleBooking(event)}>
        <label>
          Start Time:
          <input type="datetime-local" name="startTime"  />
        </label>
        <label>
          End Time:
          <input type="datetime-local" name="endTime"   />
        </label>
        <label>
          Description:
          <input type="text"  />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </>
  );
}

export default Booking;
