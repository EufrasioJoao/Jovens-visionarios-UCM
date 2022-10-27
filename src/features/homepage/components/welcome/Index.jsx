import React from "react";

import style from "./styles.module.css";

export function Wellcome() {
    return (
        <div className={style.welcome}>
            <div className={style.welcome_content}>
                <small>Garantido {"&"} Certificado</small>
                <h1>
                    <span>Melhore As Suas Habilidades Tendo </span>Cursos Da
                    mais Alta Qualidade
                </h1>
                <p>
                    A jovens visionarios te providencia o melhor conforto e
                    contribui com as suas habilidades e conhecimento.
                </p>

            </div>
        </div>
    );
}
