import React, { useState, useEffect} from "react";
import style from "./styles.module.css";
import Axios from 'axios'
import { UpdateUserInfo } from "../edit_profile_Modal/Index";

export function ProfileRightAsideBar() {
    const [updateMyInfoModal, setUpdateMyInfoModal] = useState(false);

    return (
        <div className={style.right_asidebar_container}>
            <div className={style.right_asidebar_configs}>
                <a href='#' onClick={()=>setUpdateMyInfoModal(true)}>Editar Perfil</a>
                <a href='/configs'>Configuarações principais</a>
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


            {updateMyInfoModal && (
                <UpdateUserInfo onClose={() => setUpdateMyInfoModal(false)}/>
            )}
        </div>
    );
}
