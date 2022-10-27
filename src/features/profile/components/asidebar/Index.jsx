import React from "react";
import style from "./styles.module.css";

import { Header } from "../../../../components/header/Index";

export function RegisterContainer() {
    return (
        <div>
            <Header />
            <div className={style.register_container}>
                <div className={style.register_container_left}>
                    <span>
                        Junte-se nesta crescente comunidade de visionarios.
                    </span>
                    <form>
                        <label>Nome completo</label>
                        <input type="text" />
                        <label>Nome de usuario</label>
                        <input type="text" />
                        <label>Data de nascimento</label>
                        <input type="date" />
                        <label>Email</label>
                        <input type="email" />
                        <label>Palavra passe</label>
                        <input type="password" />
                        <label>Localização da universidade</label>
                        <select name="" id="">
                            <option value="nampula">Nampula</option>
                            <option value="beira">Beira</option>
                            <option value="pemba">Pemba</option>
                            <option value="maputo">Maputo</option>
                        </select>
                        <label>Tipo de usuario</label>
                        <select name="" id="">
                            <option value="student">Estudante</option>
                            <option value="teacher">Professor</option>
                        </select>
                        <p>
                            Ao clicar em Continuar {"&"} Registar-se, voce
                            concorda com <br />
                            as nossas{" "}
                            <a href="/about">politicas de uso de dados</a>.
                        </p>
                        <button>Continuar {"&"} Registar-se</button>
                    </form>
                    <div className={style.register_container_or}>Ou</div>
                    <a
                        href="/register"
                        className={style.register_container_link}
                    >
                        Ja tem uma conta? Faça Login
                    </a>
                </div>
                <div className={style.register_container_right}>
                    <img src="\assets\images\authimg2.png" alt="" />
                </div>
            </div>
        </div>
    );
}
