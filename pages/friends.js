import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookie from 'js-cookie'
import { getUsers } from '../services/follow'
import { AiOutlineUser } from 'react-icons/ai'
import styles from '../styles/home.module.scss'
import Nav from '../components/nav'
import Menu from '../components/menu'

export default function Friends() {
    const [friends, setFriends] = useState([])
    const router = useRouter()
    const token = Cookie.get('token')
    const id = Cookie.get('id')
    useEffect(() => {
        if (!token) {
            router.push('/login')
        } else {
            getUsers(token, 'follow').then(
                setFriends
            ).catch(err => <h1>{err}</h1>)
        }
    }, [])
    return (
        <div className={styles.users}>
            <Nav id={id} token={token} />
            <h1>Your firends</h1>
            {friends != null ?
                friends.map(friend => (
                    <div className={styles.user} key={friend.id}>
                        <Link href={`/profile/${friend.id}`}><a><AiOutlineUser /> {friend.name} {friend.surname}</a></Link>
                        <h2>{friend.biography}</h2>
                        <h2>{friend.location}</h2>
                        <h2>{friend.email}</h2>
                    </div>
                ))
                : <h1>No friends found</h1>}
            <Menu />
        </div>
    )
}
