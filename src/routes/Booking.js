import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Player } from '@lottiefiles/react-lottie-player';
import axios from 'axios';

function CreateAppointmentForm() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/appointment/create/", {
        startTime,
        endTime,
        description,
         // Replace with the actual appointedTo ID
      
        },
      {
        headers: {
          'Authorization':`Bearer ${localStorage.getItem('token')}`
        },
      });

      if (response.status !== 200) {
        throw new Error('Failed to create appointment');
      }

      console.log('Appointment created successfully');
      // Add further logic here, like displaying a success message or redirecting the user
    } catch (error) {
      console.error('Error creating appointment:', error);
      // Handle error scenarios, like displaying an error message to the user
    }
  };


  return (
    <>
           <div className='booking'> <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

<Player autoplay loop src="https://lottie.host/ec5ddf24-f2fe-4d3c-8b1f-9081e25f621d/hx6QZ2T3AF.json" background="transparent" speed="1" style={{width: '150px', height: '200px'}}> </Player><h1>Book An Appointment</h1></div>
      <div className='book'>
        <h2>Select an appropriate date</h2>
        
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </label>
        <label>
          End Time:
          <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </>
  );
}

export default CreateAppointmentForm;
