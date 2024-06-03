import doc1 from "../assets/doc1.jpg";
import salon1 from "../assets/salon1.jpg";
import elec2 from "../assets/elec2.jpg";
import "./sidebar.css";
import "./bot.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
function Card(){
    return(
        <>
            <div className="sidebar">
            <ul>
               <li><a href="/"><i class="fa-regular fa-calendar-check"></i>Appointify</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/appoint">Appointments</a></li>
                <li><a href="/">Logout</a></li>

                {/* Add more menu items here */}
            </ul>
        </div>
        <div className="cat-container">
       <div className="card">
            <img className="card-image" src={doc1} alt="profile picture"></img>
            <h2 className="card-title">Medical</h2>
            <a href="/medical">Click here to see the list of medical professionals.</a>
       </div> 
        <div className="card-1">
        <img className="card-image-1" src={salon1} alt="profile picture"></img>
        <h2 className="card-title-1">Beauty</h2>
        <a href="/beauty">Click here to see the list of beauty professionals.
        </a>
   </div> 
   
        <div className="card-2">
        <img className="card-image-2" src={elec2} alt="profile picture"></img>
        <h2 className="card-title-2">Maintenance</h2>
        <a href="/main">
        Click here to see the list of maintenance professionals.
        </a>
   </div> 
   </div>
   
   <div className="bot">
     
   </div>
   </>
    );
}
export default Card;