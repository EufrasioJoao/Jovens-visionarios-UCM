import React from "react";
import style from "./styles.module.css";

import { AccountHeader } from "../../../../components/account_header/Index";
// import { AccountFooter } from "../../../../components/account_footer/Index";
import { ChatRoomMainContent } from "../main/Index";

export function ChatRoomLayout() {

    return (
        <div>
            <AccountHeader />
                <div className={style.feed_container}>
                    <ChatRoomMainContent/>
                </div>
            {/* <AccountFooter/> */}
        </div>
    );
}
