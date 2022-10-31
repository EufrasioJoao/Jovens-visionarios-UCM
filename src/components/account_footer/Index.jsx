import React, {useState} from "react";
import Axios from 'axios'
import style from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { PostModal } from "../Modals/add_post_Modal/Index";
import {
    List,
    Bell,
    UserList,
    User,
    ChatCircleDots,
    PlusCircle,
} from "phosphor-react";

export function AccountFooter() {
    // states
    const [addPostModal, setAddPostModal] = useState(false);


    return (
        <div className={style.acount_footer}>
            <header>
                <nav>
                    <div className={style.logo_container}>
                        <ul>
                            <li>
                                <a href="/configs">
                                    <button>
                                        <List color={"#000"} size={30} />
                                    </button>
                                </a>
                            </li>
                            
                            <li>
                                <button
                                    onClick={() => setAddPostModal(true)}
                                    className={style.feed_container_postbtn}
                                >
                                    <PlusCircle color="#eee" size={30} />
                                </button>
                            </li>

                            <li>
                                <a href="/profile">
                                    <button>
                                        <User color={"#000"} size={30} />
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>

            {addPostModal && (
                <PostModal onClose={() => setAddPostModal(false)} />
            )}
        </div>
    );
}
