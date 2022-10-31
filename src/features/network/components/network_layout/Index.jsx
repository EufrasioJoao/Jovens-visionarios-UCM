import React, {useContext} from "react";
import style from "./styles.module.css";

import { AccountHeader } from "../../../../components/account_header/Index";
import { AccountFooter } from "../../../../components/account_footer/Index";
import { FeedRightAsideBar } from "../../../../components/right_asidebar/Index";
import { FeedMainContent } from "../main/Index";
import { appContext } from "../../../../context/Index";

export function NetworkLayout() {
    //context
    const { Username } = useContext(appContext);

    return (
        <div>
        <AccountHeader data={Username}/>
            <div className={style.network_container}>
                <FeedMainContent />
                <FeedRightAsideBar />
            </div>
        <AccountFooter/>
        </div>
    );
}
