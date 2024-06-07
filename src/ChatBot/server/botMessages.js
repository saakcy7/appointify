import  { timeStamp } from "./timeStamp.js";
import { medicalList, beauty, maintainance} from '../client/custom-bot-messages.js';
import { medicalKey, beautyKey ,maintainanceKey } from "./keywords.js";


const findValues = (str,list)=>
    {
        return list.some(value => str.includes(value));
    }

function getBotResponse(message)
{
    let event = 'recieve_message' ;
    let bot_message;


    if(message)
    {
        if(findValues(message,medicalKey))
        {
            bot_message = `${medicalList.message}`;
            event = `medicalList`
        }
        else if(findValues(message,beautyKey))
        {
            bot_message = `${beauty.message}`;
            event = 'spaList'
        }
        else if(findValues(message,maintainanceKey))
        {
            bot_message = `${maintainance.message}`;
            event= 'salonList'
        }
        else if
        ( message.includes('how are you ')|| message.includes('how are you doing') || message.includes('how is your day going'))
            {
                bot_message = 'I am doing fine. What about you ? ';
            }
        else if(message.includes('hi'))
            {
                bot_message = 'Hello ! How can I help you?';
                if(message.includes('how are you ')|| message.includes('how are you doing') || message.includes('how is your day going'))
                    {
                        bot_message += 'I am doing fine. What about you ? ';
                    }
            }
        else if(message.includes('how are you')|| message.includes('how are you doing') || message.includes('how is your day going'))
        {
            bot_message = 'I am fine . Thank you. What about you ? ';
        }
        else if(message.includes('hello'))
            {
                bot_message = 'Hi !';
                if(message.includes('how are you')|| message.includes('how are you doing') || message.includes('how is your day going'))
                    {
                        bot_message += 'I am fine . Thank you. What about you ? ';
                    }
            }
        else
        {
            bot_message = "Thank you for using our bot services .May you have a wonderful day ahead";
            event = 'recieve_message';
        }
            return({
                event : `${event}`,
                botReply : {
                    author : "bot",
                    message : bot_message,
                    time : timeStamp()
                }
            })
        }
}

export default getBotResponse;