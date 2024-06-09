import doc1 from "../assets/doc1.jpg";
import salon1 from "../assets/salon1.jpg";
import elec2 from "../assets/elec2.jpg";
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { Route } from "react-router-dom";
function Card(){

    const cards = [{
        id : 1,
        img : `${doc1}`,
        title : 'Medical',
        route : '/medical',
        line  : 'Click here to see the list of medical professionals'
    },
    {
        id : 2,
        img : `${salon1}`,
        title : 'Beauty',
        route : '/beauty',
        line  : 'Click here to see the list of beauty professionals'
    },
    {
        id : 3,
        img : `${elec2}`,
        title : 'Maintainance',
        route : '/main',
        line  : 'Click here to see the list of maintainance professionals'
    }
]


    return(
        <>
            <div className="sidebar">
            <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkBtn">
                    <i className="fas fa-bars"></i>
                </label>
                
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
            {cards.map((card)=>
            {
                return(
                    <div className="card" key={card.id}>
            <img className="card-image" src={card.img} alt="profile picture"></img>
            <h2 className="card-title">{card.title}</h2>
            <br></br>
            <a href={`${card.route}`}><b className="clickHereLine">{card.line}</b></a>
       </div> 
                );
            })}
     
   </div>
   
   </>
    );
}
export default Card;


  /*<div className="card">
            <img className="card-image" src={doc1} alt="profile picture"></img>
            <h2 className="card-title">Medical</h2>
            <br></br>
            <a href="/medical"><b className="clickHereLine">Click here to see the list of medical professionals</b></a>
       </div> 

        <div className="card-1">
        <img className="card-image-1" src={salon1} alt="profile picture"></img>
        <h2 className="card-title-1">Beauty</h2>
        <br></br>
        <a href="/beauty"><b className="clickHereLine">Click here to see the list of beauty professionals.</b>
        </a>
   </div> 
   
        <div className="card-2">
        <img className="card-image-2" src={elec2} alt="profile picture"></img>
        <h2 className="card-title-2">Maintenance</h2>
        <a href="/main">
        <br></br>
        <b className="clickHereLine">Click here to see the list of maintenance professionals. </b>
        </a>
   </div> 
*/