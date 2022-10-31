import React, {useContext} from "react";
import Axios from 'axios'
import style from "./styles.module.css";

import { AccountHeader } from "../../../../components/account_header/Index";
import { AccountFooter } from "../../../../components/account_footer/Index";
import { ProfileRightAsideBar } from "../right_asidebar/Index";
import { ProfileMainContent } from "../main/Index";
import { appContext } from "../../../../context/Index";

export function ProfileLayout() {
    //context
    const { Username } = useContext(appContext);

    return (
        <div>
            <AccountHeader />
                <div className={style.feed_container}>
                    <ProfileMainContent />
                    <ProfileRightAsideBar />
                </div>
            <AccountFooter />
        </div>
    );
}
