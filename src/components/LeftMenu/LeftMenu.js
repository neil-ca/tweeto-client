import React, {useState} from 'react'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import LogoWhite from "../../assets/png/logo-white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faUsers, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import {logoutApi} from "../../api/auth"
import TweetModal  from "../Modal/TweetModal";
import useAuth from "../../hooks/useAuth"

import "./LeftMenu.scss";

export default function LeftMenu(props) {
    const {setRefreshCheckLogin} = props
    const [showModal, setShowModal] = useState(false)
    const user = useAuth()

    const logout = () => {
        logoutApi()
        setRefreshCheckLogin(true)
    }
    return (
        <div className="left-menu">
            <img className="logo" src={LogoWhite} alt="tweto"/>

            <Link to="/"><FontAwesomeIcon icon={faHome} /> Inicio</Link>
            <Link to="/users"><FontAwesomeIcon icon={faUsers} /> Usuarios</Link>
            <Link to={`/${user?._id}`}><FontAwesomeIcon icon={faUser} /> Perfil</Link>
            <Link to="" onClick={logout}><FontAwesomeIcon icon={faPowerOff} /> Cerrar sesion</Link>
            
            <Button onClick={() => setShowModal(true)}>Twittear</Button>
            <TweetModal show={showModal} setShow={setShowModal}/>
        </div>
    )
}
