import Axios from 'axios'
import React, { useState, useEffect} from "react";
import style from "./styles.module.css";

import { AccountHeader } from "../../../../components/account_header/Index.jsx";

export function Hero() {
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [location, setLocation] = useState();

    // Fetching user info
    useEffect( ()=>{
        let server_url = localStorage.getItem('jvs')
        let user = localStorage.getItem("jovens_visionarios_username");

        Axios.get(`${server_url}/users/single/${user}`)
        .then((response) => {
            setPhone(response.data.result.PhoneNumber);
            setEmail(response.data.result.Email);
            setLocation(response.data.result.UniversityLocation);
        })
        .catch((err) => console.log(err));
    }, [])

    return (
        <div className={style.configs_page}>
            <AccountHeader />

            <div className={style.configs_page_row}>
                <div className={style.configs_page_left}>
                    <strong>Configurações</strong>
                    <div className={style.configs_page_config_option}>
                        <span>Acesso e segurança da conta</span>
                    </div>  
                </div>

                <div className={style.configs_page_right}>
                    <div className={style.configs_page_right_box}>
                        <strong>Acesso à conta</strong>
                        <div className={style.configs_page_config_info}>
                            <span>Endereço de e-mail:</span>
                            <span>{email}</span>
                        </div>  
                        <div className={style.configs_page_config_info}>
                            <span>Numero de telefone:</span>
                            <span>{phone}</span>
                        </div>  
                        <div className={style.configs_page_config_info}>
                            <span>Localização da universidade:</span>
                            <span>{location}</span>
                        </div>  
                    </div>
                </div>
                
            </div>
        </div>
    );
}
