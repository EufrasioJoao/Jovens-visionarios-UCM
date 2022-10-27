import React, { useState } from "react";
import { List, XCircle } from "phosphor-react";

import style from "./styles.module.css";

export function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <div className={style.main_header}>
            <header>
                <nav>
                    <div className={style.logo_container}>
                        <img
                            width="30px"
                            src="\assets\images\Logo.png"
                            alt="logo"
                        />
                    </div>

                    <div className={style.links_container}>
                        {/*<ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">Sobre</a>
                            </li>
                            <li>
                                <a href="/">Duvidas</a>
                            </li>
                        </ul>*/}

                        <div className={style.button_containers}>
			    <a href="/">Home</a>
                            <a href="/login">Login</a>
                            <a href="/register">Registar-se</a>
                        </div>
                    </div>

                    {/* 
                    
                    
                    
                    Mobile links */}
                    <div
                        className={
                            isMenuVisible
                                ? style.mobile_links_container
                                : style.mobile_links_container_invisible
                        }
                    >
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="#">Serviços</a>
                            </li>
                            <li>
                                <a href="#">Sobre</a>
                            </li>
                            <li>
                                <a href="#">Duvidas</a>
                            </li>
                        </ul>

                        <div className={style.button_containers}>
                            <a href="/login">Login</a>
                            <a href="/register">Registar-se</a>
                        </div>
                    </div>
                    <div className={style.menu_button_container}>
                        <button
                            onClick={() => setIsMenuVisible(!isMenuVisible)}
                        >
                            {!isMenuVisible ? (
                                <List color="#000" size={30} />
                            ) : (
                                <XCircle color="#000" size={30} />
                            )}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
}
