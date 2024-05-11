import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import HomeImg from "../assets/img11.jpg";
import Features from "../components/Features";
import Last from "../components/Last";

function Home(){
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
        </> 
    );
}
export default Home;
