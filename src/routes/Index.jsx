import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register } from "../pages/Register";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { FeedPage } from "../pages/Feed";
import { ProfilePage } from "../pages/Profile";
import { NetworkPage } from "../pages/Network";
import { FollowRequestsPage } from "../pages/FollowRequests";
import { ChatPage } from "../pages/Chat";
import { ChatRoomPage } from "../pages/ChatRoom";
import { Configs } from "../pages/Configs";

import { appContext } from "../context/Index";

export function Router() {
    //context
    const { LoggedIn, Username } = useContext(appContext);

    // const check_auth = async (params)=>{
        // if(LoggedIn){
        //     return <Route
        //         path="/follow_requests"
        //         element={<FollowRequestsPage />}
        //     />
        // }else{
        //     return <Route
        //         path="/"
        //         element={<Homepage />}
        //     />
        // }
    // }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/follow_requests"
                        element={<FollowRequestsPage />}
                    />
                    <Route path="/network" element={<NetworkPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/chatroom" element={<ChatRoomPage />} />
                    <Route path="/feed" element={<FeedPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/configs" element={<Configs />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
