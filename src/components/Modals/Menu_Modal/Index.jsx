import  { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Style from "./Style.module.css";

export const MenuModal = ({ userData }) => {
    const navigate = useNavigate();

    // submit values
    const logOutUser = async () => {
       await localStorage.removeItem('jovens_visionarios_username')
       await localStorage.removeItem('jovens_visionarios_OP')
       await localStorage.removeItem('jovens_visionarios_avatar')
       await localStorage.removeItem('jovens_visionarios_token')
       await localStorage.removeItem('jovens_visionarios_RN')

       navigate('/')
    };

    return (
        <div data-aos="fade-down" className={Style.Menu_Modal}>
            <div className={Style.Menu_Modal_Row}>
                <img width='20px' alt='' src={userData.Avatar ? userData.Avatar : '/assets/images/me1.jpg'}></img>
                
                <div className={Style.Menu_Modal_Row_content}>
                    <span>{userData.Username}</span>
                    <span>{userData.Biography ? userData.Biography : 'Usuario da plataforma Jovens visionarios'}</span>
                </div>
            </div>
            <a className={Style.Menu_Modal_see_profile} href='profile'>Ver perfil</a>
            <div className={Style.Menu_Modal_line}></div>
            
            <div className={Style.Menu_Modal_account_links}>
                <strong>Conta</strong>
                <a href='/configs'>Configurações e privacidade</a>
                {/* <a href='#'>Ajuda</a> */}
                <div className={Style.Menu_Modal_line}></div>
                <span onClick={logOutUser}>Sair</span>
            </div>
        </div>
    );
};
