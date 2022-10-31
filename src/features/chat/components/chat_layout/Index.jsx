import React from "react";
import style from "./styles.module.css";

import { AccountHeader } from "../../../../components/account_header/Index";
import { ChatMainContent } from "../main/Index";

export function ChatLayout() {
    

    return (
        <div  className={style.chat_page_container}>
            <AccountHeader />
            <div className={style.chat_container}>
                <ChatMainContent/>
            </div>
        </div>
    );
}
