import Axios from 'axios'
import React, { useState, useEffect} from "react";
import Style from "./Style.module.css";

export const UpdateUserInfo = ({  onClose = () => {} }) => {
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [location, setLocation] = useState();
    const [id, setId] = useState();
    const [biography, setBiography] = useState();
   
    // submit values
    const handleSubmit = async (e) => {
       e.preventDefault()

       // object to be submited
       const valuesToSubmit = {
            Email: email,
            id: id,
            PhoneNumber: phone,
            UniversityLocation: location,
            Biography: biography
        };
        let server_url = localStorage.getItem('jvs') 

        // post request to the server
        Axios.post(`${server_url}/users/update_info`, {
            valuesToSubmit,
        })
            .then((response) => {
                // console.log(response.data);
                if (response.data.succes === true) onClose();
            })
            .catch((err) => console.log(err));
    };


    // Fetching user info
    useEffect( ()=>{
        let user = localStorage.getItem("jovens_visionarios_username");
        let server_url = localStorage.getItem('jvs') 

        Axios.get(`${server_url}/users/single/${user}`)
        .then((response) => {
            setPhone(response.data.result.PhoneNumber);
            setEmail(response.data.result.Email);
            setLocation(response.data.result.UniversityLocation);
            setId(response.data.result.id);
            setBiography(response.data.result.Biography);
        })
        .catch((err) => console.log(err));
    }, [])

    return (
        <div className={Style.update_user_info_modal}>
            <form
                data-aos="fade-down"
                onSubmit={(e) => handleSubmit(e)}
                className={Style.form}
            >
                <div className={Style.update_info_header}>
                    <h3>Editar introdução</h3>
                    <div onClick={onClose} className={Style.closeContainer}>
                        <div className={Style.close}></div>
                    </div>
                </div>

                <div className={Style.update_info_inputs}>
                    <small>Numero de telefone</small>
                    <input
                        required
                        type="number"
                        placeholder="Numero de telefone"
                        value={phone && phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />

                    <small>Email</small>
                    <input
                        required
                        type="email"
                        placeholder="Seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <small>Sua localização</small>
                    <input
                        required
                        type="text"
                        placeholder="Cidade"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <small>Sua Biografia</small>
                    <textarea
                        required
                        placeholder="Biografia"
                        value={biography && biography}
                        onChange={(e) => setBiography(e.target.value)}
                    ></textarea>
                </div>
                
                <div className={Style.update_info_footer}>
                    <button>Salvar</button>
                </div>
            </form>
        </div>
    );
};
