import React, {useState, useEffect} from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Spinner } from "react-bootstrap";
import {withRouter} from "react-router-dom"
import BasicLayout from "../../layouts/BasicLayout"
import { getUserApi } from "../../api/user";
import { getUserTweetsApi } from "../../api/tweet";
import { toast } from "react-toastify";
import BannerAvatar  from "../../components/User/BannerAvatar";
import useAuth from "../../hooks/useAuth"
import InfoUser  from "../../components/User/InfoUser";
import ListTweets from "../../components/ListTweets";

import "./User.scss"

function User(props) {

    const {match} = props
    const [user, setuser] = useState(null)
    const [tweets, setTweets] = useState(null)
    const {params} = match
    const loggedUser = useAuth()

    useEffect(() => {
        getUserApi(params.id).then(response => {
            if (!response) toast.error("El usuario que has visitado no existe")
            setuser(response)
        }).catch(() => {
            toast.error("El usuario no existe")
        })
    }, [params])

    useEffect(() => {
        getUserTweetsApi(params.id, 1)
        .then(response => {
            setTweets(response)
        }).catch(() => {
            setTweets([])
        })
    }, [params])
    return (
        <BasicLayout className="user">
            <div className="user__title">
            <h2>
                {user ? `${user.name} ${user.surname}` : "Este usuario no existe"}</h2>
            </div>
            <BannerAvatar user={user} loggedUser={loggedUser}/>
            <InfoUser user ={user}/>
            <div className="user__tweets">
                {tweets && <ListTweets tweets={tweets}/>}
            </div>
        </BasicLayout>
    )
}

export default withRouter(User)
