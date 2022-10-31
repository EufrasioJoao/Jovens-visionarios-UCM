import React, { useState, useEffect} from "react";
import Axios from 'axios'
import { ProfileMainInfo } from "../profile_main_info/Index";
import { Post } from "../../../../components/post/Index";
import style from "./styles.module.css";

export function ProfileMainContent() {
    //context
    const [UserInfo, setUserInfo] = useState();
    const [profileListOfPosts, setProfileListOfPosts] = useState([]);
    const [newProfileListOfPosts, setNewProfileListOfPosts] = useState([]);

    
    async function fetchData() {
        let user = await localStorage.getItem("jovens_visionarios_username");
        let server_url = localStorage.getItem('jvs') 
        
        // Fetching user info
        await Axios.get(`${server_url}/posts/${user}`)
        .then((response) => {
            if (response.data.result) {
                // console.log(response.data.result);
                setProfileListOfPosts(response.data.result);
            }
        })
        .catch((err) => console.log(err));
        
        // get request to the server to get posts from this user
        await Axios.get(`${server_url}/posts/${user}`)
                .then((response) => {
                    if (response.data.result) {
                        // console.log(response.data.result.reverse());
                        setProfileListOfPosts(response.data.result.reverse());
                    }
                })
                .catch((err) => console.log(err));
                
    }

    useEffect( ()=>{
        fetchData()
    }, [])


    return (
        <div className={style.profile_main_container_ksk}>
            <ProfileMainInfo />
            <br/>

            <div className={style.profile_posts_collection}>
            {profileListOfPosts && 
                    
                    profileListOfPosts.map((value) => {
                        return (
                            <Post 
                            id={value.id}
                            author={value.Author}
                            key={value.id}
                            avatar={value?.AuthorImage ? value?.AuthorImage : '/assets/images/me1.jpg'} 
                            video={value.Video !== null ? value.Video : ""}
                            image={value.Image !== null ? value.Image : ""}
                            description={
                                value.Description !== null
                                    ? value.Description
                                    : ""
                            }
                            likes={value.Likes}
                            comments={value.Comments}
                            shares={0}
                            username={UserInfo?.Username} 
                            usertype={UserInfo?.Type === "student" ? 'Estudante'  : 'Professor'}
                        />
                        );
                    })
                }
                
            </div>

            
        </div>
    );
}
