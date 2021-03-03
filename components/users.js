import { useEffect, useState } from 'react'
// import { useRouter } from "next/router"
import Cookie from 'js-cookie'
import { getUsers } from '../services/follow'

export default function Users() {
    const [users, setUsers] = useState([])
    // const router = useRouter()
    const token = Cookie.get('token')
    useEffect(() => {
        getUsers(token).then(response => {
            setUsers(response)
            console.log(users);
        }).catch(err => {
            <h1>{err}</h1>
        })
    }, [])
    return (
        <div>
            {users.map((user) => (<>
                <h1>{user.name} {user.surname}</h1>
                <h2>{user.biography} {user.siteweb}</h2>
                <h3>{user.email} {user.location}</h3>
            </>))}
        </div>
    )
}