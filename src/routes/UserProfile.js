import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Hero from "../components/hero";
import  img16 from "../assets/bg-img.png";
import { Player} from "@lottiefiles/react-lottie-player";
import "./UserProfile.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserProfile = (userId) => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:5000/:id',{
      method: "GET",
      })
      .then((res)=>res.json())
      .then((users)=>{
        console.log(users,"userUsers");
        setUsers(users.users);     
      });
    });
   
    return (
        <>
        <div className="userprofile">
            <Navbar/>
            <Hero  heroImg={img16} 
        title="My Profile"
        cName="herotwo"/>
       {/*<h1>User Profile,showing {activepage}</h1>*/}
        <div className="userprofile-container">
            <div className="s1">
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

    <Player autoplay loop src="https://lottie.host/f2f5a5e4-8b8e-4ca1-81af-b82a6d25f863/izYa74Jgy2.json" background="transparent" speed="1" style={{width: '300px', height: '200px'}}></Player>


            </div>
            <div className="s2">
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

<h2 className="text"><Player autoplay loop src="https://lottie.host/c4bc592b-ffdd-467a-a67e-73f6fa18ecaa/K64Zzq1yQh.json" background="transparent" speed="1" style={{width: '100px', height: '100px'}}></Player>Personal Information</h2>
    <div className="form">
        <div className="form-group">
            <label for="name">Name</label>
            <input type="text" value={users.name} placeholder="Name"/>
        </div>
        <div className="form-group">
            <label for="email">Email</label>
            <input type="email" value={users.email} placeholder="Email"/>
        </div>
        {/*
        <div className="form-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone"/>
        </div>
        <div className="form-group">
            <label for="address">Address</label>
            <input type="text" id="address" name="address" placeholder="Address"/>
        </div>
        <div className="form-group">
            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" placeholder="Date of Birth"/>
        </div>
    */}
        
       
</div>
<button className="mainbutton">Save Changes</button>
            </div>
      <Footer/>
        </div>
        </div>
          
          </>
    );
    }
    export default UserProfile; 