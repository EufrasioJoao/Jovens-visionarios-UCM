import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ChatSearchedItem } from "../searched_item/Index"; 
import Axios from 'axios'
import style from "./styles.module.css";

export function ChatMainContent() {

    const navigate = useNavigate()
    const [listOfRooms, setListOfRooms] = useState([]);
    let my_username =  localStorage.getItem("jovens_visionarios_username");

    // check if users are friends
    async function get_my_friends() {
        let user = await localStorage.getItem("jovens_visionarios_username");
        
        let data = {
            Username: user,
            RequestStatus: 'accepted'
        }

        await Axios.post(`https://jovens-visionarios-ucm-server.herokuapp.com/api/friends/get_my_friends`, data)
        .then((response) => {
            // console.log(response.data.result, 'check');
            setListOfRooms(response.data.result)
        })
        .catch((err) => console.log(err));  
    }
    useEffect( ()=>{
        get_my_friends()
    }, [])


    async function gotToChatRoom(params) {
        await localStorage.setItem('jovens_visionarios_OP', my_username === params?.RequestedFriendship ? params?.RequestingFriendship : params?.RequestedFriendship)

        await localStorage.setItem('jovens_visionarios_RN', params.RoomName)

        navigate('/chatroom')
    }


    return (
        <div className={style.chat_left_asidebar_container}>
            <header>
                <span>CHATS</span>
            </header>
            
            <div className={style.left_asidebar_rooms_box}>
                {
                    listOfRooms && listOfRooms.map((value) => {
                        return (
                            <ChatSearchedItem 
                                key={value.id}
                                value={value} 
                                username={my_username === value?.RequestedFriendship ? value?.RequestingFriendship : value?.RequestedFriendship} 
                                gotToChatRoom={gotToChatRoom}
                            /> 
                        );
                    })
                }
                
            </div>
            
            {/* <div className={style.left_asidebar_start_new_chat}>
                <button>CRIAR NOVO CHAT</button>
            </div> */}
        </div>
    );
}
