import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import AboutImg from "../assets/img7.jpg";
import Footer from "../components/Footer";
function About(){
    return(
        <>

         <Navbar/>
        <Hero cName="heroone"
        heroImg={AboutImg}
        title="About"/> 
        <Footer/>
        </>
    );
}
export default About;
