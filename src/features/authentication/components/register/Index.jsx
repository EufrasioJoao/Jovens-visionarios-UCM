import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import style from "./styles.module.css";

import { Header } from "../../../../components/header/Index";
import { appContext } from "../../../../context/Index";

export function RegisterContainer() {
    //context
    const { setLoggedIn } = useContext(appContext);

    // states
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [birthDate, setBirthDate] = useState();
    const [password, setPassword] = useState();
    const [universityLocation, setUniversityLocation] = useState('nampula');
    const [type, setType] = useState('student');
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let ableToSubmit = email.includes('ucm.ac.mz');
        let server_url = localStorage.getItem('jvs')




        //values to be submited
        const valuesToSubmit = {
            Username: username,
            BirthDate: birthDate,
            Email: email,
            Password: password,
            UniversityLocation: universityLocation,
            Type: type,
        };
        

        if (universityLocation && type && ableToSubmit) {
            Axios.post(`${server_url}/users/register`, {
                valuesToSubmit,
            })
                .then((response) => {
                    setLoggedIn(true);

                    localStorage.setItem(
                        "jovens_visionarios_avatar",
                        `null`
                    );
                    localStorage.setItem(
                        "jovens_visionarios_token",
                        `${response.data.token}`
                    );
                    localStorage.setItem(
                        "jovens_visionarios_username",
                        `${username}`
                    );
                    setMessage(response.data.message);
                    if (response.data.succes === true) navigate("/feed");
                })
                .catch((err) => console.log(err));
        } else {
            setMessage('Apenas usuarios pertences a UCM podem criar uma conta!')
        }
    };

    return (
        <div>
            <Header />
            <div className={style.register_container}>
                <div className={style.register_container_left}>
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
                        <label>Data de nascimento</label>
                        <input
                            required
                            type="date"
                            onChange={(e) => {
                                setBirthDate(e.target.value);
                            }}
                        />
                        <label>Email</label>
                        <input
                            required
                            type="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
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
                        <label>Localização da universidade</label>
                        <select
                            required
                            onChange={(e) => {
                                setUniversityLocation(e.target.value);
                            }}
                        >
                            <option value="select">
                                Selecione a localizacao
                            </option>
                            <option value="nampula">Nampula</option>
                            <option value="beira">Beira</option>
                            <option value="pemba">Pemba</option>
                            <option value="maputo">Maputo</option>
                        </select>
                        <label>Tipo de usuario</label>
                        <select
                            required
                            onChange={(e) => {
                                setType(e.target.value);
                            }}
                        >
                            <option value="select">Selecione o tipo</option>
                            <option value="student">Estudante</option>
                            <option value="teacher">Professor</option>
                        </select>
                        {message !== "" && (
                            <p style={{ color: "blue" }}>{message}</p>
                        )}
                        <p>
                            Ao clicar em Continuar {"&"} Registar-se, voce
                            concorda com <br />
                            as nossas{" "}
                            <a href="#">politicas de uso de dados</a>.
                        </p>
                        <button>Continuar {"&"} Registar-se</button>
                    </form>
                    <div className={style.register_container_or}>Ou</div>
                    <a href="/login" className={style.register_container_link}>
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
