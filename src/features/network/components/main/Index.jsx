import React, { useState, useEffect} from "react";
import Axios from 'axios'
import { NetworkSearchedItem } from "../searched_item/Index";
import style from "./styles.module.css";
import {MagnifyingGlass} from "phosphor-react";

export function FeedMainContent() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');

    async function fetchData() {
        let user = await localStorage.getItem("jovens_visionarios_username");
        let server_url = localStorage.getItem('jvs')
        
        // Fetching user info
        await Axios.get(`${server_url}/users/all`)
        .then((response) => {
            if (response.data.result) {
                // console.log(response.data.result);
                setListOfUsers(response.data.result);
            }
        })
        .catch((err) => console.log(err));
                
    }

    useEffect( ()=>{
        fetchData()
    }, [])

    return (
        <div className={style.network_main_container}>

            <div className={style.network_search_container}>
                <span>Procure por amigos</span>
                <div className={style.network_search_inputbox}>
                    <input type="text" placeholder="Pesquise aqui..." onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <div>
                        <button>
                            <MagnifyingGlass color="#fff" size={30} />
                        </button>
                    </div>
                </div>
            </div>


            <div className={style.network_searcheditems_collection}>
            {listOfUsers &&
                    // filtering the array of users to get the user that has the name provided
                    listOfUsers.filter((value)=>{
                        if (searchTerm === '') { /* if there was not found any user with the values provided */
                            return(
                                <NetworkSearchedItem 
                                    username={value?.Username} 
                                    usertype={value?.Type === "student" ? 'Estudante'  : 'Professor'}
                                    
                                    avatar={value?.AuthorImage ? value?.AuthorImage : '/assets/images/me1.jpg'} 
                                    key={value.id}
                                    id={value.id}
                                    universityLocation={value.UniversityLocation}
                                />
                            )
                        }

                        // if there was found any user with the values provided
                        else if(value?.Username.toLowerCase().includes(searchTerm.toLowerCase())){
                            return(
                                <NetworkSearchedItem 
                                    username={value?.Username} 
                                    usertype={value?.Type === "student" ? 'Estudante'  : 'Professor'}
                                    
                                    avatar={value?.AuthorImage ? value?.AuthorImage : '/assets/images/me1.jpg'} 
                                    key={value.id}
                                    id={value.id}
                                    universityLocation={value.UniversityLocation}
                                />
                            )
                        }
                    }).map((value) => {
                        return (
                            <NetworkSearchedItem 
                                username={value?.Username} 
                                usertype={value?.Type === "student" ? 'Estudante'  : 'Professor'}
                                biography={value?.Biography}
                                avatar={value?.AuthorImage ? value?.AuthorImage : '/assets/images/me1.jpg'} 
                                key={value.id}
                                id={value.id}
                                universityLocation={value?.UniversityLocation}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}
