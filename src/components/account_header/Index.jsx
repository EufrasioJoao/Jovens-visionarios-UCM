import React, { useState, useEffect} from "react";
import Axios from 'axios'
import style from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { PostModal } from "../Modals/add_post_Modal/Index";
import { MenuModal } from "../Modals/Menu_Modal/Index";
import {
    RssSimple,
    Bell,
    UserList,
    Users,
    ChatCircleDots,
    PlusCircle,
} from "phosphor-react";

export function AccountHeader() {
    // states
    const [userData, setUserData] = useState([]);
    const [userInfo, setUserInfo] = useState('');
    const [friends, setFriends] = useState('');
    const [avatar, setAvatar] = useState('');
    const [clicked_header_route, setClicked_header_route] = useState("feed");
    const [addPostModal, setAddPostModal] = useState(false);
    const [menuModal, setMenuModal] = useState(false);
    const navigate = useNavigate();

    
     useEffect( ()=>{
        let user = localStorage.getItem("jovens_visionarios_username");
        let server_url = localStorage.getItem('jvs')

        Axios.get(`${server_url}/users/single/${user}`)
        .then((response) => {
            setUserData(response.data.result)
            setUserInfo(response.data.result.Username)
            setFriends(response.data.result.Friends)
            setAvatar(response.data.result.Avatar ? response.data.result.Avatar : "/assets/images/me1.jpg")
        })
        .catch((err) => console.log(err));
    }, [])

    return (
        <div className={style.acount_header}>
            <header>
                <nav>
                    <div className={style.logo_container}>
                        <img
                            width="30px"
                            src="\assets\images\Logo.png"
                            alt="logo"
                        />

                        <ul>
                            <li>
                                <a href="/feed">
                                    <button>
                                        <RssSimple color={"#000"} size={25} />
                                        <span>
                                            Feed
                                        </span>
                                    </button>
                                </a>
                            </li>

                            <li>
                                <a href="/network">
                                    <button>
                                        <Users color={"#000"} size={25} />
                                        <span>
                                            Network
                                        </span>
                                    </button>
                                </a>
                            </li>

                            <li>
                                <a href="/follow_requests">
                                    <button>
                                        <UserList color={"#000"} size={25} />
                                        <span>
                                            Pedidos
                                        </span>
                                    </button>
                                </a>
                            </li>

                            <li>
                                <a href="/chat">
                                    <button className={style.chat_button_navigate_header}>
                                        <ChatCircleDots color={"#000"} size={25} />
                                        <span>
                                            Chat
                                        </span>
                                    </button>
                                </a>
                            </li>

                            {/* <li>
                                <button
                                    onClick={() => {
                                        navigateTo("notification");
                                    }}
                                >
                                    <Bell color={"#000"} size={25} />
                                    <span
                                        className={
                                            clicked_header_route === "bell"
                                                ? style.active_header_route
                                                : undefined
                                        }
                                    >
                                        Notificações
                                    </span>
                                </button>
                            </li> */}
                            <li>
                                <button
                                    onClick={() => setAddPostModal(true)}
                                    className={style.feed_container_postbtn}
                                >
                                    <PlusCircle color="#eee" size={30} />
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className={style.account_link_box}>
                        <div className={style.account_link_container}>
                            <a href="/profile">
                                <img src={avatar} alt="" />
                            </a>
                            <div
                                className={style.account_link_button_containers}
                            >
                                <span>{userInfo}</span>
                                <span>{friends} Seguidores</span>
                            </div>
                        </div>
                        <div onClick={()=>{setMenuModal(!menuModal)}} className={style.account_link_other_settings}>
                            <span>...</span>
                            <span>other</span>
                        </div>
                    </div>
                </nav>
            </header>

            {addPostModal && (
                <PostModal onClose={() => setAddPostModal(false)} />
            )}
            {menuModal && (
                <MenuModal  userData={userData} />
            )}
        </div>
    );
}
