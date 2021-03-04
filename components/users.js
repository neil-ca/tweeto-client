import { useEffect, useState } from 'react'
// import { useRouter } from "next/router"
import Cookie from 'js-cookie'
import { getUsers } from '../services/follow'
import styles from '../styles/home.module.scss'
import { AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link'


export default function Users() {
    const [users, setUsers] = useState([])
    const [user, setUser]= useState()
    // const router = useRouter()
    const token = Cookie.get('token')
    useEffect(() => {
        getUsers(token).then(response => {
            setUsers(response)
            console.log(response)
            let idUser = response.id
            console.log(idUser);
        }).catch(err => {
            <h1>{err}</h1>
        })
    }, [])
    return (
        <>        
            { users != null ?
                <div className={styles.users}>
                    <h1 className={styles.meet}>Meet new people</h1>
                    {users.map((user) => (<>
                        <div className={styles.user}>
                            <h1><AiOutlineUser/><br/>{user.name} {user.surname}</h1>
                            <Link href={`/profile/${user.id}`}><a>view</a></Link>
                        </div>
                    </>))}
                </div>
                : <h1>No users</h1>}
        </>)
}