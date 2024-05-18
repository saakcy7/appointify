import doc1 from "../assets/doc1.jpg";
import salon1 from "../assets/salon1.jpg";
import elec2 from "../assets/elec2.jpg";

function Card(){
    return(
        <>
        <div className="cat">
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
   </>
    );
}
export default Card;