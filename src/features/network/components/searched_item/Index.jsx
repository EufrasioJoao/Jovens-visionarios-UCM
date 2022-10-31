import React, { useState, useEffect} from "react";
import Axios from 'axios'
import style from "./styles.module.css";

export function NetworkSearchedItem({
    username,
    usertype,
    avatar,
    id,
    biography,
    universityLocation
}) {
    const [ alreadyRequested, setAlreadyRequested ] = useState(false);
    const [ isMyFriend, setIsMyFriend ] = useState(false);
    const [ someoneMadeRequest, setSomeoneMadeRequest ] = useState(false);
    const my_username = localStorage.getItem("jovens_visionarios_username");
    var [authorAvatar, setAuthorAvatar] = useState("");
    
    // check if users are friends
    async function check_if_is_friend() {
        let user = await localStorage.getItem("jovens_visionarios_username");
        let server_url = localStorage.getItem('jvs')
        
        let data = {
            Destiny: username,
            Emissor: user, 
            RequestStatus: 'accepted'
        }
        await Axios.post(`${server_url}/friends/check_if_is_my_friend`, data)
        .then((response) => {
            // console.log(response.data, 'ismyfriend');
            if(response.data.isFriend === true){
                setIsMyFriend(true)
            }
        })
        .catch((err) => console.log(err));  
    }

    
    
    // check if request was already sent
    async function check_if_request_was_already_sent() {
        let user = await localStorage.getItem("jovens_visionarios_username");
        let server_url = localStorage.getItem('jvs') 
        
        let data = {
            Destiny: username,
            Emissor: user, 
            RequestStatus: 'waiting'
        }

        await Axios.post(`${server_url}/friends/already_made_request`, data)
        .then((response) => {
            // console.log(response.data, 'alredy requested');
            if(response.data.alreadySent){
                setAlreadyRequested(true)
            }
        })
        .catch((err) => console.log(err));  
    }

    
    // add friendship request
    async function DeleteFriendshipRequest() {
        setAlreadyRequested(false)
        let user = await localStorage.getItem("jovens_visionarios_username");
        let server_url = localStorage.getItem('jvs') 

        let data = {
            Destiny: username,
            Emissor: user, 
            RequestStatus: 'waiting'
        }

        await Axios.post(`${server_url}/friends/delete_friendship_request`, data)
        .then((response) => {
                // console.log(response.data);
        })
        .catch((err) => console.log(err));   
    }

    
    // add friendship request
    async function AddFriendshipRequest() {
        setAlreadyRequested(true)
        let user = await localStorage.getItem("jovens_visionarios_username");
        let server_url = localStorage.getItem('jvs') 

        let data = {
            Destiny: username,
            Emissor: user, 
            RequestStatus: 'waiting'
        }
        
        await Axios.post(`${server_url}/friends/add_friendship_request`, data)
        .then((response) => {
            // console.log(response.data);
            if(response.data.sent){
                setAlreadyRequested(true)
            }
            if(response.data.alreadySent){
                setSomeoneMadeRequest(true)
            }
        })
        .catch((err) => console.log(err));   
    }


    useEffect( ()=>{
        let server_url = localStorage.getItem('jvs') 
        check_if_request_was_already_sent()
        check_if_is_friend()

        Axios.get(`${server_url}/users/single/${username}`)
        .then((response) => {
            setAuthorAvatar(response.data.result.Avatar)
        })
    }, [])

    return (
        <div className={someoneMadeRequest === true ? style.NetworkSearchedItemInvisible : style.NetworkSearchedItem_box_container}>
            <div className={my_username.toLowerCase() === username.toLowerCase() ? style.NetworkSearchedItemInvisible : style.NetworkSearchedItem_box}>
                <div className={
                    isMyFriend === true ? style.NetworkSearchedItemInvisible : style.NetworkSearchedItem
                    }>
                    <div className={style.NetworkSearchedItem_row}>
                        <div className={style.NetworkSearchedItem_img}>
                            <img width='25px' alt='' src={authorAvatar && authorAvatar }></img>
                        </div>

                        <div className={style.NetworkSearchedItem_content}>
                            <span>{username}</span>
                            <small>{usertype}</small>
                            {/* <p>{biography ? biography : 'Aluno da universidade catolica de mocambique cituada na cidade de nampula Aluno da universidade catolica de mocambique'}</p> */}
                        </div>
                    </div>
                    {
                            !alreadyRequested ? <button className={style.follow} onClick={AddFriendshipRequest}>Seguir</button>
                            :
                            <button className={style.waiting}  onClick={DeleteFriendshipRequest}>Esperando</button>
                    }
                </div>
            </div>
        </div>
        
    );
}
