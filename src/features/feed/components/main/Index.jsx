import React, {useContext, useState, useEffect} from "react";
import Axios from 'axios'
// import { NewPost } from "../new_post/Index";
import { Post } from "../../../../components/post/Index";
import style from "./styles.module.css";
import { appContext } from "../../../../context/Index";

export function FeedMainContent() {
    //context
    const { Username } = useContext(appContext);
    const [listOfPosts, setListOfPosts] = useState([]);
    const [UserInfo, setUserInfo] = useState();
    const [newlistOfPosts, setNewListOfPosts] = useState([]);
    var callOnce = false
    
    async function fetchPosts() {
        let server_url = localStorage.getItem('jvs')

        // get request to the server
        if(!callOnce){
            Axios.get(`${server_url}/posts/get`)
                .then((response) => {
                    if (response.data.result) {
                                for (let i = 0; i < response.data.result.length; i++) {
                                    setListOfPosts((item)=> {
                                        return [...item, response.data.result[Math.floor(Math.random() * response.data.result.length)]]
                                    })
                                }
                            
                        
                    }
                })
                .catch((err) => console.log(err));
            callOnce = true
        }
    }


    useEffect(() => {
        let server_url = localStorage.getItem('jvs')
        let user = localStorage.getItem("jovens_visionarios_username");

        Axios.get(`${server_url}/users/single/${user}`)
        .then((response) => {
            setUserInfo(response.data.result)
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetchPosts()
    }, []);

    

    return (
        <div className={style.feed_main_container}>
            {/* <NewPost /> */}

            {/* <div className={style.sortpostsby}>
                ORDENAR POR:{" "}
                <select name="" id="">
                    <option value="trending">TRENDING</option>
                    <option value="likes">LIKES</option>
                    <option value="comments">COMENTARIOS</option>
                </select>
            </div> */}

            <div className={style.feed_posts_collection}>
                {listOfPosts &&
                    listOfPosts.map((value) => {
                        return (
                            <Post
                                key={value.id}
                                id={value.id}
                                author={value.Author}
                                setListOfPosts={setListOfPosts}
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
