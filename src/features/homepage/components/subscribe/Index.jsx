import React from "react";
import style from "./styles.module.css";

export function Subscribe() {
    return (
        <div className={style.subscribe}>
            <div className={style.subscribe_box}>
                <div className={style.subscribe_content}>
                    <span>
                        Se inscreva para poder ficar atualizado
                        <br />
                        {"&"} Faça parte da comunidade
                    </span>
                    <p>
                        Se inscreva hoje e desfrute dos cursos que os outros tem para oferecer, e expanda os seus horizontes.
                    </p>
                    <a href="/register">Inscrever-se</a>
                </div>

                <img
                    src="\assets\images\student-1.png"
                    alt=""
                    className={style.img_one}
                />
                <img
                    src="\assets\images\student-2.png"
                    alt=""
                    className={style.img_two}
                />
                <img
                    src="\assets\images\student-3.png"
                    alt=""
                    className={style.img_three}
                />
                <img
                    src="\assets\images\student-4.png"
                    alt=""
                    className={style.img_four}
                />
                <img
                    src="\assets\images\student-5.png"
                    alt=""
                    className={style.img_five}
                />
                <img
                    src="\assets\images\student-6.png"
                    alt=""
                    className={style.img_six}
                />
            </div>
        </div>
    );
}
