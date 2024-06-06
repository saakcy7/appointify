import {useEffect, useState} from 'react';
import React from 'react';
import './medical.css';
import './side.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 function Medical() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:5000/user/getusersbycategory?category=medical',{
      method: "GET",
      })
      .then((res)=>res.json())
      .then((users)=>{
        console.log(users,"userUsers");
        setUsers(users.users);     
      });
    });

    return(
        <>
        <div className="side">
        <ul>
           <li><a href="/"><i class="fa-regular fa-calendar-check"></i>Appointify</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/appoint">Appointments</a></li>
            <li><a href="/">Logout</a></li>

        </ul>
    </div>
        <div className='table-container'>
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            <div className='w-50'>
            <table className='table' style={{border:'1px solid black'}}>
                    <tr style={{backgroundColor: '#f2f2f2'}}>
                        <th style={{padding: '10px', border: '1px solid black'}}>Name</th>
                        <th style={{padding: '10px', border: '1px solid black'}}>Email</th>
                        <th style={{padding: '10px', border: '1px solid black'}}>Address</th>
                        <th style={{padding: '10px', border: '1px solid black'}}>Profession</th>
                        <th style={{padding: '10px', border: '1px solid black'}}>Description</th>
                        <th style={{padding: '10px', border: '1px solid black'}}>Category</th>
                    </tr>
                    {
                    users.map((i) =>{
                        return(
                            
                        <tr className="table" style={{border: '1px solid black'}}>
                           
                            <td style={{padding: '20px',border: '1px solid black'}}>{i.fullName}</td>
                            <td style={{padding: '20px',border: '1px solid black'}}>{i.email}</td>
                            <td style={{padding: '20px',border: '1px solid black'}}>{i.address}</td>
                            <td style={{padding: '20px',border: '1px solid black'}}>{i.profession}</td>
                            <td style={{padding: '20px',border: '1px solid black'}}>{i.description}</td>
                            <td style={{padding: '20px',border: '1px solid black'}}>{i.category}</td>
                            <td><button class="button"><a href='/book'>Book Appointment</a></button></td>
                    
                        </tr>
                      
                        )
                    }
                )}
            </table>
            </div>
        </div>
        </div>
        </>
    );
 }
 export default Medical;