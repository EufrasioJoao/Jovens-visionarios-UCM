import React, { useState, useContext } from "react";
import Axios from "axios";
import Style from "./Style.module.css";
import { appContext } from "../../../context/Index";

export const PostModal = ({ onClose = () => {} }) => {
    // states
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const { Username, Avatar } = useContext(appContext);

    // submit values
    const handleSubmit = (e) => {
        e.preventDefault();

        let server_url = localStorage.getItem('jvs')

        // object to be submited
        const valuesToSubmit = {
            AuthorImage: Avatar ? Avatar : '/assets/images/me1.jpg',
            Image: imageUrl,
            Video: "",
            Description: description,
            Likes: 0,
            Comments: 0,
            Author: Username,
        };

        // post request to the server
        Axios.post(`${server_url}/posts/upload`, {
            valuesToSubmit,
        })
            .then((response) => {
                setMessage(response.data.message);
                if(response.data.succes === true) onClose()
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
                <h3>Criar um post</h3>
                <input
                    required
                    type="text"
                    placeholder="Url da imagem"
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <textarea
                    placeholder="descrição da publicação"
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                {message && <div className={Style.message}>{message}</div>}
                <button>Criar post</button>
            </form>
        </div>
    );
};
