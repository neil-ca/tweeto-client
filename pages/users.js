import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookie from 'js-cookie'
import { getUsers } from '../services/follow'
import { AiOutlineUser } from 'react-icons/ai'
import styles from '../styles/home.module.scss'
import Nav from '../components/nav'


export default function Users() {
    const [new_users, setNewUsers] = useState([])
    const [friends, setFriends] = useState([])
    const router = useRouter()
    const token = Cookie.get('token')
    const id = Cookie.get('id')
    useEffect(() => {
        if (!token) {
            router.push('/login')
        } else {
            getUsers(token, 'new').then(res => { 
                setNewUsers(res)
                console.log(res)
            }
            ).catch(err => {
                <h1>{err}</h1>
            })
            getUsers(token, 'follow').then(
                setFriends
            ).catch(err => <h1>{err}</h1>)
        }
    }, [])
    return (
        <div className={styles.users}>
            <Nav id={id} token={token}/>
            {new_users != null ?
                <div className={styles.users}>
                    <h1 className={styles.meet}>Meet new people</h1>
                    {new_users.map((user) => (
                        <div className={styles.user} key={user.id}>
                            <h1><AiOutlineUser /> {user.name} {user.surname}</h1>
                            <Link href={`/profile/${user.id}`}><a>view</a></Link>
                        </div>
                    ))}
                </div>
                : <h1>No users new found</h1>}
            <h1>Your firends</h1>
            <div>
                {friends != null ?
                    friends.map(friend => (
                        <div className={styles.user}>
                            <Link href={`/profile/${friend.id}`}><a><AiOutlineUser /> {friend.name} {friend.surname}</a></Link>
                            <h1>{friend.biography}</h1>
                        </div>
                    ))
                    : <h1>No friends found</h1>}
            </div>
        </div>
    )
}