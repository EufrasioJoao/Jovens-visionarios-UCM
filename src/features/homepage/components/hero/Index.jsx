import React from "react";
import style from "./styles.module.css";

import { Wellcome } from "../welcome/Index";

export function Hero() {
    return (
        <div className={style.hero_conatiner}>
            <Wellcome />
        </div>
    );
}
