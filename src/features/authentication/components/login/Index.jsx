import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import style from "./styles.module.css";

import { Header } from "../../../../components/header/Index";
import { appContext } from "../../../../context/Index";

export function LoginContainer() {
    //context
    const { setLoggedIn } = useContext(appContext);

    // states
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //values to be submited
        const valuesToSubmit = {
            Username: username,
            Password: password,
        };
        let server_url = localStorage.getItem('jvs')

        if (username && password && server_url) {
            Axios.post(`${server_url}/users/login`, {
                valuesToSubmit,
            })
                .then((response) => {
                    setMessage(response.data.message);
                    setLoggedIn(true);

                    localStorage.setItem(
                        "jovens_visionarios_avatar",
                        `${response.data.userData.Avatar}`
                    );
                    localStorage.setItem(
                        "jovens_visionarios_token",
                        `${response.data.token}`
                    );
                    localStorage.setItem(
                        "jovens_visionarios_username",
                        `${response.data.userData.Username}`
                    );
                    if (response.data.succes === true) navigate("/feed");
                })
                .catch((err) => console.log(err));
        } else {
            setMessage('Preencha todos os campos')
        }
    };

    return (
        <div>
            <Header />
            <div className={style.login_container}>
                <div className={style.login_container_left}>
                    <span>
                        Junte-se nesta crescente comunidade de visionarios.
                    </span>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label>Nome de usuario</label>
                        <input
                            required
                            type="text"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                        <label>Palavra passe</label>
                        <input
                            required
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        {message !== "" && (
                            <p style={{ color: "blue" }}>{message}</p>
                        )}
                        <p>
                            Ao clicar em Continuar {"&"} Entrar, voce concorda
                            com <br />
                            as nossas{" "}
                            <a href="#">politicas de uso de dados</a>.
                        </p>
                        <button>Continuar {"&"} Entrar</button>
                    </form>
                    <div className={style.login_container_or}>Ou</div>
                    <a href="/register" className={style.login_container_link}>
                        Não tem uma conta? Registe-se
                    </a>
                </div>
                <div className={style.login_container_right}>
                    <img src="\assets\images\authimg1.png" alt="" />
                </div>
            </div>
        </div>
    );
}
