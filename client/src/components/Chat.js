import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Chatbox from './Chatbox';
import Input from './Input';
import Messages from './Messages';

let socket;

const Chat = ({location}) => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    const ENDPOINT = 'http://127.0.0.1:5000/';

    

    useEffect(() => {
        const {name,room} = queryString.parse(location.search); 

        socket = io('http://127.0.0.1:5000/',{
            transports: ['websocket']
        });

        socket.emit('join', { name,room }, (res) => {
            console.log(res);
        });

        

        setName(name);
        setRoom(room); 

        return () => {
            socket.emit('disconnected');

            socket.off();
        }

    },[ENDPOINT,location.search])


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages,message]); 
        });
    }, [messages]);


    const sendMessage = (e) => {
        e.preventDefault();

        if(message){
            socket.emit('sendMessage',message, (res) => {
                setMessage('');
                console.log(res);
            })
        }
    }

    // console.log(socket);
    // console.log(message,messages);

    return (
        <div className="container">
            <Chatbox name={name} room={room} />
            <Messages  messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
    )
}

export default Chat
