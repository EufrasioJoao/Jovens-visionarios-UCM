import React, {useContext, useState, useEffect} from "react";
import Axios from 'axios'
import style from "./styles.module.css";

import { AccountHeader } from "../../../../components/account_header/Index";
import { AccountFooter } from "../../../../components/account_footer/Index";
import { FeedLeftAsideBar } from "../left_asidebar/Index";
import { FeedRightAsideBar } from "../../../../components/right_asidebar/Index";
import { FeedMainContent } from "../main/Index";


import { appContext } from "../../../../context/Index";

export function FeedLayout() {
    //context
    const { Username } = useContext(appContext);
    const [UserInfo, setUserInfo] = useState();

    
    // Fetching user info
    useEffect( ()=>{
        let server_url = localStorage.getItem('jvs')
        let user = localStorage.getItem("jovens_visionarios_username");

        Axios.get(`${server_url}/users/single/${user}`)
        .then((response) => {
            setUserInfo(response.data.result)
        })
        .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <AccountHeader data={Username}/>
            <div className={style.feed_container}>
                <FeedLeftAsideBar data={UserInfo}/>
                <FeedMainContent />
                <FeedRightAsideBar />
            </div>
            <AccountFooter />
        </div>
    );
}
