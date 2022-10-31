import React from "react";
import style from "./styles.module.css";

export function FeedRightAsideBar({image, backgroungimage}) {
    return (
        <div className={style.right_asidebar_container}>

            <div className={style.right_asidebar_promotions}>
                <p>Promovido</p>
                <div className={style.right_asidebar_promotions_columns}>
                    <div className={style.right_asidebar_promotions_row}>
                        <img src='\assets\images\Logo.png' alt=''></img>
                        <div>
                            <span>Aprenda novas habilidades</span>
                            <small>desbloqueie acesso gratis para poder ter curso com experts por um mes agora.</small>
                        </div>
                    </div>
                    <div className={style.right_asidebar_promotions_row}>
                        <img src='\assets\images\AinsLogo.jpg' alt=''></img>
                        <div>
                            <span>Bem vindo</span>
                            <small>Desfrute da plataforma e divirte-se nesta imensa comunidade.</small>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={style.right_asidebar_hastags}>
                <p>Hastags mias seguidas</p>
                <div>
                    <span>#business</span>
                    <span>#curso</span>
                    <span>#design</span>
                    <span>#programacao</span>
                    <span>#HTML</span>
                    <span>#CSS</span>
                    <span>#JS</span>
                    <span>#Marketing</span>
                </div>
            </div>
            <div className={style.right_asidebar_changeconfigs}>
                <a href='/configs' >Veja as suas configs</a>
            </div>
        </div>
    );
}
