import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import style from "./styles.module.css";
import {
    ShareNetwork,
    PaperPlaneTilt,
    HeartStraight,
    ChatCircleText,
} from "phosphor-react";


import { appContext } from "../../context/Index";

export function Post({
    avatar,
    video,
    image,
    description,
    likes,
    comments,
    id,
    username,
    usertype,
    author
}) {
    //states
    const { Username, Avatar } = useContext(appContext);
    var [postLikes, setIsPostLikes] = useState(likes);
    var [postComments, setPostComments] = useState([]);
    var [isLiked, setIsLiked] = useState(false);
    var [isCommentsVisible, setIsCommentsVisible] = useState(false);
    var [input, setInput] = useState("");
    var [authorAvatar, setAuthorAvatar] = useState("");

    //checks if user liked this current post
    useEffect(() => {
        
        //  request to the server
        Axios.get(`https://jovens-visionarios-ucm-server.herokuapp.com/api/users/single/${author}`)
        .then((response) => {
            setAuthorAvatar(response.data.result.Avatar)
        })

        //  request to the server
        Axios.post("https://jovens-visionarios-ucm-server.herokuapp.com/api/likes/check_like", {
            Author: Username,
            PostId: id,
        })
            .then((response) => {
                if (response.data.like === true) {
                    setIsLiked(true);
                }
            })
            .catch((err) => console.log(err));

        //  request to the server
        Axios.post(`https://jovens-visionarios-ucm-server.herokuapp.com/api/comments/get_by_id`, {
            PostId: id,
        })
            .then((response) => {
                if (response.data.succes === true) {
                    setPostComments(response.data.result)
                }
            })
            .catch((err) => console.log(err));
    }, []);

    
    
    //handles like adding
    const handleLikesAdding = () => {
        //change the display of the likes
        if (isLiked) {
            setIsPostLikes(postLikes - 1);
            setIsLiked(false);
        }
        if (!isLiked) {
            setIsPostLikes(postLikes + 1);
            setIsLiked(true);
        }

        //values to submit when adding a like
        const valuesToSubmit = {
            Author: Username,
            PostId: id,
        };

        // post request to add a like
        Axios.post("https://jovens-visionarios-ucm-server.herokuapp.com/api/likes/add_like", valuesToSubmit)
            .then((response) => {})
            .catch((err) => console.log(err));
    };

    
    //handles comment adding
    const handleCommentAdding = () => {
        // values to submit when adding a comment
        const valuesToSubmit = {
            Author: Username,
            PostId: id,
            Description: input,
            Image: Avatar
        };

        // post request to add a like
        Axios.post(
            "https://jovens-visionarios-ucm-server.herokuapp.com/api/comments/add_comment",
            valuesToSubmit
        )
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => console.log(err));

        /*
        
        refresh the comment list*/
        Axios.post(`https://jovens-visionarios-ucm-server.herokuapp.com/api/comments/get_by_id`, {
            PostId: id,
        })
            .then((response) => {
                setPostComments(response.data.result)
            })
        
        setInput("");
    };

    return (
        <div className={style.post_container}>
            <header>
                <div className={style.post_header_row_container}>
                    <img width="30px" src={authorAvatar ? authorAvatar : '/assets/images/me1.jpg'} alt="" />
                    <div>
                        <span>{author}</span>
                        <span>{usertype}</span>
                    </div>
                </div>
                {/* <button>
                    <div />
                    <div />
                    <div />
                </button> */}
            </header>

            <div className={style.post_content_container}>
                {description && <p>{description}</p>}
                {image && <img src={image} alt="" />}
                {video && <video controls src={video}></video>}
            </div>

            <footer>
                <div className={style.post_footer_likesrow_container}>
                    <div>
                        <span>
                            <HeartStraight color="#747474" size={15} />
                        </span>
                        <span>
                            <ChatCircleText color="#747474" size={15} />
                        </span>
                        <span>
                            <ShareNetwork color="#747474" size={15} />
                        </span>
                        <span>{Number(postLikes)+comments}</span>
                    </div>
                    <div>
                        <small>{comments} Comentarios</small>
                        <small>{postLikes} Likes</small>
                    </div>
                </div>

                <div className={style.post_footer_row_container}>
                    <button onClick={() => handleLikesAdding()}>
                        <HeartStraight
                            color={isLiked ? "tomato" : "#747474"}
                            size={30}
                        />{" "}
                        <span
                            style={
                                isLiked
                                    ? { color: "tomato" }
                                    : { color: "#747474" }
                            }
                        >
                            Gostei
                        </span>
                    </button>
                    <button
                        onClick={() => setIsCommentsVisible(!isCommentsVisible)}
                    >
                        <ChatCircleText color="#747474" size={30} />{" "}
                        <span>Comentar</span>
                    </button>
                </div>

                <div
                    className={
                        isCommentsVisible
                            ? style.add_comments_container
                            : style.add_comments_container_none_display
                    }
                >
                    <div className={style.add_comments}>
                        <img src="\assets\images\me1.jpg" alt="" />
                        <div>
                            <input
                                type="text"
                                placeholder="Adicionar comentario"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button onClick={() => handleCommentAdding()}>
                                <PaperPlaneTilt color="#747474" size={30} />
                            </button>
                        </div>
                    </div>

                    <div className={style.post_comments}>
                        
                        {postComments &&
                            postComments.map((value) => {
                                return (
                                    <div key={value.id} className={style.post_comment}>
                                        <img src="\assets\images\me2.jpg" alt="" />
                                        <div>
                                            <span className={style.post_comment_username}>{value.Author}</span>
                                            <span className={style.post_comment_usertype}>
                                                Estudante
                                            </span>
                                            <span className={style.post_comment_comment}>{value.Description}</span>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </footer>
        </div>
    );
}
