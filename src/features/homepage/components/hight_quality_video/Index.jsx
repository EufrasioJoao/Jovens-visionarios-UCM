import React from "react";
import style from "./styles.module.css";

import { Code, Globe } from "phosphor-react";

export function HightQualityVideo() {
    return (
        <div className={style.hight_quality_video}>
            <div className={style.hight_quality_video_content}>
                <h2>
                    Videos de alta qualidade, audio <br />
                    {"&"} e aulas em Live
                </h2>
                <p>
                    Lorem Videos de alta qualidade, audio em Videos de alta
                    quali Lorem Videos de alta qualidade, audio em Videos de
                    alta quali Lorem Videos de alta qualidade, audio em Videos
                    de
                </p>

                <a href="/">Ver Cursos</a>
            </div>

            <div className={style.hight_quality_video_video_box}>
                <div className={style.hight_quality_video_video_container}>
                    <img alt="image" src="/assets/images/product1.jpg"></img>
                </div>
                <div className={style.hight_quality_video_row_box}>
                    <div>
                        <div className={style.green}>
                            <Globe color="yellowgreen" size={30} />
                        </div>
                        <span>Redes Sociais</span>
                    </div>
                    <div>
                        <div className={style.tomato}>
                            <Code color="tomato" size={30} />
                        </div>
                        <span>HTML {"&"} CSS</span>
                    </div>
                    <div>
                        <div className={style.violet}>
                            <Code color="violet" size={30} />
                        </div>
                        <span>JavaScript</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
