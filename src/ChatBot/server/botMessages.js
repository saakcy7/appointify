import  { timeStamp } from "./timeStamp.js";
import { medicalList ,tenMinutesQ,salon, spa} from '../client/custom-bot-messages.js';

function getBotResponse(message)
{
    let event ;
    let bot_message;


    if(message)
        {
            
        //if(message.includes('nurse' || 'medicine' || 'doctor' || 'hospital' || 'nurse' || 'disease' || 'sick'))
        if(message.includes('nurse') || message.includes('medicine') || message.includes('doctor') || message.includes('disease') || message.includes('doctor') || message.includes('sick') || message.includes('hospital') || message.includes('medical'))
        {
            bot_message = `${medicalList.message}`;
                event = 'medicalList';
        }
    else if(message.includes('hair') || message.includes('haircut') || message.includes('barber') || message.includes('hairstyle') 
    || message.includes('hair color') || message.includes('facial') || message.includes('grooming') || message.includes(
'trimming') || message.includes('salon'))
        {
            bot_message = `${salon.message}`,
            event = 'salonList'
        }
        else if(message.includes('spa') || message.includes('massage') || message.includes('relax') || message.includes('wax') || message.includes('waxing') || message.includes('sauna') || message.includes('swimming') || message.includes('bath'))
            {
                bot_message = `${spa.message}`,
                event = `spaList`
            }
        else
        {
            bot_message = "Default bot message";
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