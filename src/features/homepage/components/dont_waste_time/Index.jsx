import React from "react";
import style from "./styles.module.css";

export function DontWasteTime() {
    return (
        <div className={style.dont_waste_time}>
            <div className={style.dont_waste_time_box}>
                <div className={style.dont_waste_time_left}>
                    <span>Melhores Cursos</span>
                    <h2>
                        Nao perca tempo neste ano. Desenvolva as suas
                        habilidades
                    </h2>
                    <p>
                        Aproveite a plataforma da jovens visionarios ao maximo. Ela é totalmente gratuita e foi criada com o proposito de servir como a plataforma de troca de conhecimentos da Universidade Catolica de Moçambique.
                    </p>
                    <a href="/register">Registe-se agora</a>
                </div>
                <div className={style.dont_waste_time_right}>
                    <img src="assets\images\woman.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}
