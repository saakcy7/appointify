import React from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Hero from "../../components/hero";
import  img16 from "../../assets/bg-img.png";
import "./UserProfile.css";
const UserProfile = () => {
    const {activepage}=useParams();
    alert(activepage);
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


            </div>
            <div className="s2">
    <h2 className="text">Personal Information</h2>
    <div className="form">
        <div className="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name"/>
        </div>
        <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email"/>
        </div>
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