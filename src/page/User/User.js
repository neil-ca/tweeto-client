import React, {useState, useEffect} from 'react'
import { Button, Spinner } from "react-bootstrap";
import {withRouter} from "react-router-dom"
import BasicLayout from "../../layouts/BasicLayout"
import { getUserApi } from "../../api/user";
import { toast } from "react-toastify";

import "./User.scss"

function User(props) {

    const {match} = props
    const [user, setuser] = useState(null)

    useEffect(() => {
        getUserApi(match.params.id).then(response => {
            setuser(response)
            if (!response) toast.error("El usuario que has visitado no existe")
        }).catch(() => {
            toast.error("El usuario no existe")
        })
    }, [match.params])

    return (
        <BasicLayout className="user">
            <div className="user__title">
                <h2>User..</h2>
            </div>
            <div>Banner User</div>
            <div>Info User</div>
            <div className="user__tweets">List of tweets</div>
        </BasicLayout>
    )
}

export default withRouter(User)
