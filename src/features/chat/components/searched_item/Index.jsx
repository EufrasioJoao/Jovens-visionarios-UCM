import React, { useState, useEffect} from "react";
import Axios from 'axios'
import style from "./styles.module.css";

export function ChatSearchedItem({
    value,
    gotToChatRoom,
    username
}) {
    
    const my_username = localStorage.getItem("jovens_visionarios_username");
    var [authorAvatar, setAuthorAvatar] = useState("");

    async function getUserAvatar() {
        let _username = await username
        let server_url = localStorage.getItem('jvs')

        await Axios.get(`${server_url}/users/single/${_username}`)
        .then((response) => {
            setAuthorAvatar(response.data.result.Avatar)
        })
    }
    

    useEffect( ()=>{
        getUserAvatar()
    }, [])

    return (
        
        <div key={value.id} className={style.left_asidebar_room} onClick={()=>gotToChatRoom(value)}>
            <img width='40px' src={authorAvatar && authorAvatar}></img>
            
            <div>
                <span>
                {
                my_username === value?.RequestedFriendship ? value?.RequestingFriendship : value?.RequestedFriendship
                }
                </span>
                <span>...</span>
            </div>
        </div>
    );
}
