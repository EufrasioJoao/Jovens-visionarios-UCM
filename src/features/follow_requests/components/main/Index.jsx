import React, { useState, useEffect} from "react";
import Axios from 'axios'
import { NetworkSearchedItem } from "../searched_item/Index";
import style from "./styles.module.css";

export function FriendshipRequestsMainContent() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [isThereAnyRequest, setIsThereAnyRequest] = useState(false);
    
    async function fetchData() {
        let server_url = localStorage.getItem('jvs')
        let user = await localStorage.getItem("jovens_visionarios_username");
        
        // Fetching user info
        await Axios.post(`${server_url}/friends/my_requests`, {user})
        .then((response) => {
                if(response.data.result.length === 0){
                    setIsThereAnyRequest(false)
                }else{
                    setIsThereAnyRequest(true)
                }
                setListOfUsers(response.data.result);
        })
        .catch((err) => console.log(err));
    }

    useEffect( ()=>{
        fetchData()
    }, [])
    return (
        <div className={style._follow__main_container}>
            {
                !isThereAnyRequest === true ? 
    
                <div className={style.no_requests_for_you}>
                    Não há pedidos de amizade para ti... Faça mais amigos e boa sorte!
                </div>
                
                :
    
                <div className={style.follow_main_container}>
                    <div className={style.follow_searcheditems_collection}>
                            {
                                listOfUsers && listOfUsers.map((value) => {
                                    return (
                                        <NetworkSearchedItem 
                                            username={value?.Emissor} 
                                            key={value.id}
                                            id={value.id}
                                        />
                                    );
                                })
                            }
                    </div>
                </div>
            }
        </div>
    );
}
