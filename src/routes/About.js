import Navbar from "../components/Navbar";
import React from "react";
import Hero from "../components/hero";
import AboutImg from "../assets/img7.jpg";
import Footer from "../components/Footer";
import "./aboutStyles.css";
function About(){
    return(
        <>

         <Navbar/>
        <Hero cName="heroone"
        heroImg={AboutImg}
        title="About"/>
        <div className="about-container">
            <h1>Our History</h1>
            <p></p>
         
        <Footer/>
        </div>
        </>
    );
}
export default About;
