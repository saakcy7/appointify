import Card from "../components/card";
import {useAuth0} from "@auth0/auth0-react";
import {useState} from 'react';
import './categoryStyles.css';
import Chatbot from '../ChatBot/client/Chatbot.jsx';
import '../ChatBot/client/Chatbot.css';
import messageIcon from '../ChatBot/client/assets/messageIcon2.jpeg';



function Category() {
    const {isAuthenticated,user} = useAuth0();
    const [showChatbot, setshowChatbot] = useState(false);

    const handleVisibility = ()=>
        {
            setshowChatbot(!showChatbot);
        }

    return(
       <>
            <Card/>
            {
                isAuthenticated && (
                    <div className="user">
                        <h2>Welcome {user.Name}</h2>
                    </div>
                )
            }

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
export default Category;