import './LastStyles.css'
import LastData from "./LastData";
import last1 from "../assets/doc1.jpg";
import last2 from "../assets/salon1.jpg";
import last3 from "../assets/elec2.jpg";
function Last(){
    return(
        <div className="service">
            <h1>Our Services</h1>
            <p>Users can choose required professionals accordingly.</p>
            <div className='servicecard'>
                <LastData image={last1}
                heading="Medical"
                text="The medical professionals evaluate the condition and provide advice or treatments. Treatments may include medication prescriptions, lifestyle changes, or referrals to specialists."/>
                 <LastData image={last2}
                heading="Beauty"
                text="Beauty professionals provide facials, cleansing, exfoliation, and moisturizing,including chemical peels, microdermabrasion, and so on."/>
                <LastData image={last3}
                heading="Maintenance"
                text="Maintenance professionals handle routine tasks to keep buildings, equipment, and systems in good condition.
                This includes fixing minor issues like leaky faucets, loose hinges and so on."/>
            </div>
        </div>
    );
}
export default Last;