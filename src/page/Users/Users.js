import React, {useState, useEffect} from 'react'
import { Spinner, ButtonGroup, Button } from "react-bootstrap";
import { getFollowsApi } from "../../api/follow";

import BasicLayout from "../../layouts/BasicLayout"

import "./Users.scss"
export default function Users(props) {
    const {setRefreshCheckLogin} = props
    const [users, setUsers] = useState(null)
    useEffect(() => {
        getFollowsApi("page=1&type=new&search=")
        .then(response => {
            console.log(response);
        }).catch(() => {
            setUsers([])
        })
    }, [])

    return (
        <BasicLayout className="users" title="Usuarios" setRefreshCheckLogin={setRefreshCheckLogin}>
            <div className="users__title">
                <h2>Usuarios</h2>
                <input type="twxt" placeholder="Busca un usuario"/>
            </div>

            <ButtonGroup className="users__options">
                <Button>Siguiendo</Button>
                <Button>Nuevos</Button>
            </ButtonGroup>
        </BasicLayout>
    )
}
