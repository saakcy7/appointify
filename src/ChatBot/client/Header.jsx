import botLogo from './assets/bot-logo.png';

function Header({closeFunction})
{
    return(
        <div className="Header">

            <img src = {botLogo}  alt= "logo" />

            <h4>Chatbot</h4>

            <button className='close-button' onClick={()=>
                {
                    closeFunction();
                }
            }>X</button>

        </div>
    );
}

export default Header;