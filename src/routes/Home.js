import { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import HomeImg from "../assets/img11.jpg";
import Features from "../components/Features";
import Last from "../components/Last";
import Footer from "../components/Footer";
import Chatbot from '../ChatBot/client/Chatbot.jsx';
import '../ChatBot/client/Chatbot.css';
import messageIcon from '../ChatBot/client/assets/messageIcon2.jpeg';


function Home(){

    const [showChatbot, setshowChatbot] = useState(false);

    const handleVisibility = ()=>
        {
            setshowChatbot(!showChatbot);
        }


    return(
        <>
       
         <Navbar />
         
        <Hero cName="hero"
        heroImg={HomeImg} 
        title="From Click to Confirmed" 
        text="Book in Seconds" 
        buttonText="Login/Signup"
        url="/log"
        btnClass="show"/>
        <Features/>
        <Last/>
        <Footer/>

        {!showChatbot &&  <button className="chatbot-icon-button" onClick={()=>
                {
                    setTimeout(()=>
                    {
                        setshowChatbot(!showChatbot);
                    },500);
                }
            }><img src={messageIcon}/></button>}

            {showChatbot && <Chatbot closeFunction={handleVisibility}/>}



        </> 
    );
}
export default Home;
