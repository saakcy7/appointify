import io from 'socket.io-client';
import {useState, useEffect, useRef} from 'react';
import parse from 'html-react-parser';


import Header from './Header';
import Form from './Form.jsx';
import button from './assets/send.png';
import { listOfServices, wouldYouLike,form} from './custom-bot-messages.js';
import './customMessage.css';
import './Chatbot.css';
//import './Form.css';


///////////////////////

/////////////////

const socket = io.connect('http://localhost:8000');

function timeStamp()
      {
        const d= new Date();
        const hr = d.getHours();
        const min = d.getMinutes().toString().padStart(2,'0');

        return (hr +':'+min);
      }


function Chatbot({closeFunction})
{


  const [currentMessage, setCurrentMesssage] = useState("");
  const [lastUserMessageData,setlastUserMessageData] = useState({});
  const [messageList, setMessageList] = useState([]);
  const [jumpMessageList, setjumpMessageList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  //form state variable below;
  const[fName , setfName] = useState('');
    const[lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [qanswer,setQanswer] = useState('');
  /////////

  //form functions below
  const handleSubmit = (e)=>
    {
        e.preventDefault();
        console.log('form submitted',fName,lName,email,gender,qanswer);
    }

const selectGender = (e)=>
    {
        setGender(e.target.value);
        console.log(gender);
    }
const handleRadioChange = (e)=>
    {
        setQanswer(e.target.value)
        console.log(qanswer);
    }
  ////



  const socketRef = useRef();

  const messageEndRef = useRef(null);

  useState(()=>
  {
    try{
    const lastMessageTime = lastUserMessageData.time.split(':');
    const currentTime = timeStamp().split(':');

    const hr = parseInt(currentTime[0])-parseInt(lastMessageTime[0]);
    const min = parseInt(currentMessage[1])-parseInt(lastMessageTime[0]);

    setShowForm(hr > 0 || min >= 1);
    }catch(err)
    {
      console.log(err);
    }
  },[]);


  useState(()=>
  {
    const intervalId = setInterval(()=>
    {
      try{
        const lastMessageTime = lastUserMessageData.time.split(':');
        const currentTime = timeStamp().split(':');
    
        const hr = parseInt(currentTime[0])-parseInt(lastMessageTime[0]);
        const min = parseInt(currentMessage[1])-parseInt(lastMessageTime[0]);
    
        setShowForm(hr > 0 || min >= 1);
        }catch(err)
        {
          console.log(err);
        }
    },0.5*60*1000); ///checks every 5 mins

    return ()=> clearInterval(intervalId);
  },[lastUserMessageData.time]);



  const sendMessage = async()=>
  {
    if(currentMessage !== "")
      {
        const messageData = {
          author : "user",
          message : currentMessage,
          time: timeStamp()
        }

        setlastUserMessageData(messageData);

        setCurrentMesssage(c => c= "");

        await socketRef.current.emit('userMessage',messageData);

        setMessageList(list => [...list,messageData]);

      }

  }



////
  useEffect(()=>
  {
    socketRef.current = socket;
      socketRef.current.on('recieve_message',(data)=>
      {
        console.log(data);
        setMessageList(list => [...list,data]);
      });        

      return()=>{
        socketRef.current.off('recieve_message');
      };
  },[]);

  useEffect(()=>
  {
    socketRef.current.on('medicalList',(data)=>
      {
        const obj = {
          author : data.author,
          message : parse(data.message),
          time : data.time
        }
        console.log(obj);
  
        const timer = setTimeout(()=>
        {
          setMessageList(list => [...list,obj]);
        },1500);
      });

      return()=>
        {
          socketRef.current.off('medicalList');
        };
  });


  useEffect(()=>
    {
      socketRef.current.on('salonList',(data)=>
        {
          const obj = {
            author : data.author,
            message : parse(data.message),
            time : data.time
          }
          console.log(obj);
    
          const timer = setTimeout(()=>
          {
            setMessageList(list => [...list,obj]);
          },1500);
        });
  
        return()=>
          {
            socketRef.current.off('salonList');
          };
    });


    useEffect(()=>
      {
        socketRef.current.on('spaList',(data)=>
          {
            const obj = {
              author : data.author,
              message : parse(data.message),
              time : data.time
            }
            console.log(obj);
      
            const timer = setTimeout(()=>
            {
              setMessageList(list => [...list,obj]);
            },1500);
          });
    
          return()=>
            {
              socketRef.current.off('spaList');
            };
      });





  ///




////scroll the body of chat down 
  useEffect(()=>
  {
    messageEndRef.current?.scrollIntoView({behavior : 'smooth'});
  },[messageList]);



////




  ///first messages to render when page is refreshed
    useEffect(()=>
    {
      const timer = setTimeout(()=>
      {
        setMessageList([{
          author : 'bot',
          message : 'Hello! Welcome to Appointify Virtual Assistant, I can resolve 80% for your enquiry here.',
          time : timeStamp()
        },
      {
        author : 'bot',
          message : 'Please choose from the list of LG product that I can assist you?',
          time : timeStamp()
      },
    {
      author : listOfServices.author,
      message : parse(listOfServices.message),
      time : timeStamp()
    }])
      },1300);

      return ()=> clearTimeout(timer);
      
    },[]);
/////


    return(

        <div className='Chat'>
        <Header closeFunction={closeFunction}/>
  
        <div className='chat-body'>
  
          {messageList.map((msg,index)=>
          {
            return(
              <div className={`message ${msg.author}`} key={index}>
  
                <div className="content">
                  {msg.message}
                  
                  
                  
                 
                </div>
                <div className={`timeStamp ${msg.author}`}>
                  {msg.time}
                </div>
              
              </div>
            );
          })}

          {showForm && <Form/>}
          <div ref={messageEndRef}/>

          {/*{showForm && <Form/>}*/}
  
        </div>
  
  
        <div className='chatbot-footer'>
          <input onChange={(e)=>
            {
              setCurrentMesssage(e.target.value);
            }
          }
          
          value={currentMessage} className='input-field'
          
          placeholder='Input your query'
          
          onKeyDown={(event)=>
            {
              if(event.key === 'Enter')
                {
                  sendMessage();
                }
            }
          }/>
            <button onClick={sendMessage}>
            <img src={button} className='sendImagebtn'/>
            </button>
      </div>
      </div>
      
    );
  }

  



export default Chatbot;