import React from "react";
import style from "./styles.module.css";

export function JoinAsMentor() {
    return (
        <div className={style.join_as_mentor}>
            <div className={style.join_as_mentor_left}>
                <img src="\assets\images\man.jpg" alt="" />
            </div>
            <div className={style.join_as_mentor_right}>
                <span>
                    Deseja compartilhar o seu conhecimento? Junte-se a nós sendo
                    um professor
                </span>
                <p>
                    Crie uma conta como um professor e compartilhe o seu conhecimento com os outros usuarios da pplataforma criando cursos dos mais diversos tipos.
                </p>
                <a href="/register">Seja professor</a>
            </div>
        </div>
    );
}
