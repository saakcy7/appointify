import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
const PORT = 4000;
import getBotResponse from './botMessages.js';
import { timeStamp } from './timeStamp.js';


const app = express();

app.use(cors());
const server = http.createServer(app);
const io = new Server(server,{
    cors : {
        origin : 'http://localhost:3000',
        methods : ["GET","POST"]
    }
});


io.on('connection',(socket)=>
{
    console.log(`New user connected : ${socket.id}`);

    socket.on('disconnect',()=>
    {
        console.log(`User Disconnected : ${socket.id}`);
    });

    socket.on('userMessage',(msg)=>
    {
        
        const wholeMessage = getBotResponse(msg.message.toLowerCase());
        console.log(wholeMessage);

        const event = wholeMessage.event;
        const botResponse = wholeMessage.botReply;

        setTimeout(()=>
        {
            socket.emit(`${event}`,botResponse);
        },2000);
    });

});


server.listen(PORT,()=>
{
    console.log(" 👍Server running in PORT ",PORT)
})
