import React, { useState, useContext } from "react";
import Axios from "axios";
import Style from "./Style.module.css";
import { appContext } from "../../../context/Index";

export const UpdateAvatar = ({ id, onClose = () => {} }) => {
    // states
    const [imageUrl, setImageUrl] = useState("");
    const [message, setMessage] = useState("");
    const { Username, Avatar } = useContext(appContext);

    // submit values
    const handleSubmit = (e) => {
        e.preventDefault();

        // object to be submited
        const valuesToSubmit = {
            Avatar: imageUrl,
            id: id,
        };

        // post request to the server
        Axios.post("https://jovens-visionarios-ucm-server.herokuapp.com/api/users/update_avatar", {
            valuesToSubmit,
        })
            .then((response) => {
                setMessage(response.data.message);
                if (response.data.succes === true) onClose();
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className={Style.sign}>
            <form
                data-aos="fade-down"
                onSubmit={(e) => handleSubmit(e)}
                className={Style.form}
            >
                <div onClick={onClose} className={Style.closeContainer}>
                    <div className={Style.close}></div>
                </div>
                <h3>Atualizar avatar</h3>
                <input
                    required
                    type="text"
                    placeholder="Url da imagem"
                    onChange={(e) => setImageUrl(e.target.value)}
                />

                {message && <div className={Style.message}>{message}</div>}
                <button>Atualizar Avatar</button>
            </form>
        </div>
    );
};
