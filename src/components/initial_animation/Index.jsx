import React from "react";
import style from "./style.module.css";

export function InitialAnimation() {
    return (
        <div className={style.animation_container}>
            {/* <div className={style.animation_circle} >
                <div className={style.animation_letter}>
                    E
                </div>
            </div> */}
            <img src='\assets\images\loader.gif' alt=''/>
        </div>
    );
}
