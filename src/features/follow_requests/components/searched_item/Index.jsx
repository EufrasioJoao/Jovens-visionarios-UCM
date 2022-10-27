import React, { useState, useEffect} from "react";
import Axios from 'axios'
import style from "./styles.module.css";

export function NetworkSearchedItem({
    username,
    id,
}) {
    const [ alreadyRequested, setAlreadyRequested ] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [Avatar, setAvatar] = useState('');
    const [Type, setType] = useState('');
    const [Biography, setBiography] = useState('');
    const [UniversityLocation, setUniversityLocation] = useState('');
    var [authorAvatar, setAuthorAvatar] = useState("");

    // Fetching user info
    useEffect( ()=>{
        Axios.get(`https://jovens-visionarios-ucm-server.herokuapp.com/api/users/single/${username}`)
        .then((response) => {
            setAvatar(response.data.result.Avatar  ? response.data.result.Avatar : '/assets/images/me1.jpg')
            setType(response.data.result.Type  === "student" ? 'Estudante'  : 'Professor')
            setBiography(response.data.result.Biography)
            setUniversityLocation(response.data.result.UniversityLocation)
        })
        .catch((err) => console.log(err));
    }, [])
    

    
    // accept friendship request
    async function AcceptFriendshipRequest() {
        setAlreadyRequested(true)
        let user = await localStorage.getItem("jovens_visionarios_username");
        
        let data = {
            Destiny: user,
            Emissor: username, 
            id: id
        }

        await Axios.post(`https://jovens-visionarios-ucm-server.herokuapp.com/api/friends/accept_friendship_request`, data)
        .then((response) => {
                // console.log(response.data);
        })
        .catch((err) => console.log(err));   
    }

    async function getUserAvatar() {
        let _username = await username

        await Axios.get(`https://jovens-visionarios-ucm-server.herokuapp.com/api/users/single/${_username}`)
        .then((response) => {
            setAuthorAvatar(response.data.result.Avatar)
        })
    }


    useEffect( ()=>{
        getUserAvatar()
    }, [])


    return (
        <div className={style.NetworkSearchedItem}>
            <div className={style.NetworkSearchedItem_row}>
                <div className={style.NetworkSearchedItem_img}>
                    <img width='25px' alt='' src={authorAvatar ? authorAvatar : '\assets\images\me1.jpg'}></img>
                </div>

                <div className={style.NetworkSearchedItem_content}>
                    <span>{username}</span>
                    <small>{Type}</small>
                    <p>{Biography ? Biography : `Aluno da universidade catolica de mocambique cituada na cidade de ${UniversityLocation}`}</p>
                </div>
            </div>
            
            {
                !alreadyRequested ? <button className={style.follow} onClick={AcceptFriendshipRequest}>Aceitar</button>
                :
                <button className={style.waiting}>Aceitado</button>
            }
        </div>
    );
}
