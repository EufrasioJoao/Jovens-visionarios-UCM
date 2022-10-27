import React from "react";

import style from "./styles.module.css";

export function Footer() {
    return (
        <footer className={style.footer}>
            <div>
                <img src="\assets\images\Logo.png" alt="" />
                <br />
                <a href="/">Jovens Visionarios - UCM</a>
                <a href="/#">&copy; All rights reserved</a>
            </div>
            <div>
                <span>Navegação</span>
                <div className={style.footer_navigation}>
                    <div>
                        <a href="/#">Serviços</a>
                        <a href="/#">Sobre</a>
                        <a href="/#">Duvidas</a>
                    </div>
                    <div>
                        <a href="/">Home</a>
                        <a href="/register">Registar-se</a>
                        <a href="/login">Login</a>
                    </div>
                    <div>
                        <a href="/#">Politica de uso dados</a>
                        <a href="/#">Aplicativo</a>
                    </div>
                </div>
            </div>
            <div>
                <span>Programador</span>
                <p>
                    Eufrasio Joao
                    <br />
                    <a href="mailto:eufrasiojoao00@gmail.com">
                        eufrasiojoao00@gmail.com
                    </a>
                    <a href="tel:+258847623731">847623731</a>
                </p>
            </div>
            <div>
                <span>Idioma</span>
                <p>Portugues</p>
            </div>
        </footer>
    );
}
