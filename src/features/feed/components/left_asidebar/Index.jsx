import React from "react";
import style from "./styles.module.css";

export function FeedLeftAsideBar({data}) {

    return (
        <div className={style.left_asidebar_container}>
            <div className={style.left_asidebar_userinfo_container}>
                <div>
                    { data?.Banner && <img src={data?.Banner} alt='' />}
                    
                    { 
                        data?.Avatar && <a href='/profile'><img src={data?.Avatar} alt=''/></a> 
                    }
                </div>
                <span>{data?.Username}</span>
                <p>
                    {data?.Biography && data?.Biography }
                </p>
            </div>
            
            <div className={style.left_asidebar_events_container}>
                {/* <a href='/'>Grupos</a>
                <a href='/'>Eventos</a>
                <a href='/'>Aulas</a> */}
                <a href='/#'>Descubra mais</a>
            </div>
        </div>
    );
}
