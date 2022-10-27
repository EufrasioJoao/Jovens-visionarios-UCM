import React, { useState } from "react";


// import { InitialAnimation } from "../components/initial_animation/Index";
import { FeedLayout } from "../features/feed/components/feed_layout/Index";

export function FeedPage() {
    const [endAnimation, setEndAnimation] = useState(false)

    // // close initial animation
    // setTimeout(() => {
    //     setEndAnimation(true);
    // }, 500);

    return (
        <div>
            <FeedLayout />
        </div>
    );
}
