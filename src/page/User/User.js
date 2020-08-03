import React, {useState, useEffect} from 'react'
import { Button, Spinner } from "react-bootstrap";
import {withRouter} from "react-router-dom"
import BasicLayout from "../../layouts/BasicLayout"
import { getUserApi } from "../../api/user";
import { toast } from "react-toastify";
import BannerAvatar  from "../../components/User/BannerAvatar";

import "./User.scss"

function User(props) {

    const {match} = props
    const [user, setuser] = useState(null)
    const {params} = match

    useEffect(() => {
        getUserApi(params.id).then(response => {
            if (!response) toast.error("El usuario que has visitado no existe")
            setuser(response)
        }).catch(() => {
            toast.error("El usuario no existe")
        })
    }, [params])

    return (
        <BasicLayout className="user">
            <div className="user__title">
            <h2>
                {user ? `${user.name} ${user.surname}` : "Este usuario no existe"}</h2>
            </div>
            <BannerAvatar user={user}/>
            <div>Info User</div>
            <div className="user__tweets">List of tweets</div>
        </BasicLayout>
    )
}

export default withRouter(User)
