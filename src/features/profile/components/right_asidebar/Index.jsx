import React from "react";
import style from "./styles.module.css";

export function ProfileRightAsideBar({image, backgroungimage}) {
    return (
        <div className={style.right_asidebar_container}>
            <div className={style.right_asidebar_configs}>
                <a href='#'>Editar Perfil</a>
                <a href='#'>Configuarações principais</a>
            </div>

            <div className={style.right_asidebar_promotions}>
                <p>Promovido</p>
                <div className={style.right_asidebar_promotions_columns}>
                    <div className={style.right_asidebar_promotions_row}>
                        <img src='\assets\images\AinsLogo.jpg' alt=''></img>
                        <div>
                            <span>Aprenda novas habilidades</span>
                            <small>desbloqueie acesso gratis para poder ter curso com experts por um mes agora</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.right_asidebar_changeconfigs}>
                <a href='#' >Mude as suas configs</a>
            </div>
        </div>
    );
}
