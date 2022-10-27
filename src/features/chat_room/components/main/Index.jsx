import React, { useState, useEffect } from "react";
import ScroolToBottom from 'react-scroll-to-bottom'
import style from "./styles.module.css";
import {PaperPlaneTilt} from "phosphor-react";

import io from "socket.io-client";
const socket = io.connect("https://jovens-visionarios-ucm-server.herokuapp.com");

export function ChatRoomMainContent() {
    
    const [input, setInput] = useState('')
    const [messageList, setMessageList] = useState([])

    let my_username =  localStorage.getItem("jovens_visionarios_username");
    let otherPerson =  localStorage.getItem("jovens_visionarios_OP");
    let roomName =  localStorage.getItem("jovens_visionarios_RN");
    
    useEffect(()=>{
        otherPerson !== '' && socket.emit('join_room', roomName)

        if(otherPerson !== ''){
            fetch(`https://jovens-visionarios-ucm-server.herokuapp.com/api/messages/my_messages`, {
                    method: "POST",
                    body: JSON.stringify({RoomName: roomName}),
                    headers: {"Content-Type": "application/json"},
                })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data.result);
                    if(data.result){
                        setMessageList(data.result)
                    }else{
                        setMessageList([])
                    }
                })
                .catch((err) => console.log(err));
        }
    }, [])


    // useEffect to receive messages from the backend
    useEffect(()=>{
        socket.emit('join_room', roomName) //also joining room in case it didn't

        socket.on('receive_message', (data)=>{
                // setMessageList((list)=>[...list, data])
                 fetch(`https://jovens-visionarios-ucm-server.herokuapp.com/api/messages/my_messages`, {
                        method: "POST",
                        body: JSON.stringify({RoomName: roomName}),
                        headers: {"Content-Type": "application/json"},
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log(data.result);
                        if(data.result){
                            setMessageList(data.result)
                        }else{
                            setMessageList([])
                        }
                    })
                    .catch((err) => console.log(err));
        })
    }, [socket])


    // send message to backend and emiting send_message event
    const sendMessage = async ()=>{
        if (input !== "") {
            const messageData = {
                room: roomName,
                author: my_username,
                message: input,
            }

            await socket.emit("send_message", messageData)
           
            setInput('')
        }
    }

    return (
        <div className={style.chat_main_container}>
            <header><span>{otherPerson}</span></header>

            <ScroolToBottom className={style.content}>
                <div className={style.content}>
                        {
                            messageList && messageList.map((value)=>{
                                return (
                                    <div key={value.id} className={my_username === value.Author ? style.minediv : style.hisdiv}>
                                        <span className={style.mine}>{value.Description}</span>
                                    </div>
                                )
                            })
                        }
                </div>
            </ScroolToBottom>

            <div className={style.footer}>
                <input type='text' value={input}  placeholder='Escreva sua mensagem'  onChange={(e)=>setInput(e.target.value)} onKeyPress={(e)=>{e.key === 'Enter' && sendMessage()}}></input>
                <button onClick={sendMessage}><PaperPlaneTilt color='#fff' size={30}/></button>
            </div>
        </div>
    );
}
