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
            <p>About Appointify
Welcome to Appointify!

At Appointify, we believe in the power of efficient time management and seamless scheduling. Our mission is to simplify the process of booking appointments, making it easy and convenient for both service providers and clients.

Our Vision
We envision a world where scheduling appointments is effortless and stress-free. Whether you're a healthcare provider, a beauty expert, or a business professional, Appointify is here to help you manage your time more effectively.

What We Offer
Easy Scheduling: Book appointments with just a few clicks. Our intuitive interface ensures that you spend less time scheduling and more time doing what you love.
Automated Reminders: Never miss an appointment again. Appointify sends automated reminders to keep you and your clients on track.
Secure Management: Your data's security is our priority. We use advanced encryption and security measures to protect your information.
Customizable Options: Tailor the booking experience to fit your unique needs. From custom fields to specific time slots, Appointify is flexible and adaptable.
Join Us
Join the growing community of professionals who trust Appointify to manage their appointments. Experience the difference that an organized schedule can make.

Thank you for choosing Appointify. We look forward to helping you make the most of your time!

</p>
         
        <Footer/>
        </div>
        </>
    );
}
export default About;
