import React, {useContext, useState, useEffect} from "react";
import Axios from 'axios'
import style from "./styles.module.css";
import { appContext } from "../../../../context/Index";
import { UpdateAvatar } from "../../../../components/Modals/Update_Avatar_Modal/Index.jsx";

export function ProfileMainInfo() {
    //context
    const { Username } = useContext(appContext);
    const [UserInfo, setUserInfo] = useState();
    const [updateMyAvatar, setUpdateMyAvatar] = useState(false);
    

    // Fetching user info
    useEffect( ()=>{
        let user = localStorage.getItem("jovens_visionarios_username");

        Axios.get(`https://jovens-visionarios-ucm-server.herokuapp.com/api/users/single/${user}`)
        .then((response) => {
            setUserInfo(response.data.result)
        })
        .catch((err) => console.log(err));
    }, [])

    return (
        <div className={style.profile_main_info_container}>
            <div className={style.profile_main_info_img_box}>
                {!UserInfo?.Banner && 
                    <div className={style.profile_banner_background}>
                        <div/>
                        <div/>
                    </div>
                }
                {UserInfo?.Banner && <img src={UserInfo?.Banner} alt=''></img>}
                {UserInfo?.Avatar ? <img src={UserInfo?.Avatar} alt='' onClick={() => setUpdateMyAvatar(true)}></img> : <img src='\assets\images\me1.jpg' alt='' onClick={() => setUpdateMyAvatar(true)}></img> }
            </div>
            
            <div className={style.profile_main_info_content}>

                <div className={style.profile_main_info_content_row}>
                    <div className={style.profile_main_info_content_left}>
                        <strong>{UserInfo?.Username}</strong>
                        <p>
                            {UserInfo?.Biography ? UserInfo?.Biography : `Aluno na universidade catolica de mocambique em ${UserInfo?.UniversityLocation}`}
                        </p>
                        <small>{UserInfo?.UniversityLocation}, Mocambique  -  <a href='#'>informacoes de contacto</a></small>
                    </div>

                    <div className={style.profile_main_info_content_right}>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <p>Universidade catolica de mocambique</p>                      
                    </div>
                </div>

                <div className={style.profile_main_info_content_addinterest}>
                    <a href='#'>Tenho interese em...</a>                      
                    <a href='#'>Adicionar seccao ao perfil</a>                      
                    <a href='#'>Mais</a>                      
                    </div>
            </div>

            {updateMyAvatar && (
                <UpdateAvatar id={UserInfo?.id} onClose={() => setUpdateMyAvatar(false)} />
            )}
        </div>
    );
}
