import React from "react";
import style from "./styles.module.css";

import { AccountHeader } from "../../../../components/account_header/Index";
import { ChatRoomMainContent } from "../main/Index";

export function ChatRoomLayout() {

    return (
        <div>
            <AccountHeader className={style.chatroom_page_container} />
                <div className={style.chatroom_container}>
                    <ChatRoomMainContent/>
                </div>
        </div>
    );
}
