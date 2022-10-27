import React from "react";
import style from "./styles.module.css";

import { AccountHeader } from "../../../../components/account_header/Index";
import { AccountFooter } from "../../../../components/account_footer/Index";
import { FeedRightAsideBar } from "../../../../components/right_asidebar/Index";
import { FriendshipRequestsMainContent } from "../main/Index";

export function FollowRequestsLayout() {
    return (
        <div>
            <AccountHeader />
            <div className={style.feed_container}>
                <FriendshipRequestsMainContent />
                <FeedRightAsideBar />
            </div>
            <AccountFooter />
        </div>
    );
}
