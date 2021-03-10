import Cookie from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { useDispatchAuth } from '../context/Auth'
import { getUser } from '../services/user'
import styles from '../styles/nav.module.scss'

export default function Nav() {
    const router = useRouter()
    const dispatch = useDispatchAuth()
    const [profile, setProfile] = useState('')
    const token = Cookie.get('token')
    const id = Cookie.get('id')
    useEffect(() => {
        getUser(id, token).then(res => {
            setProfile(res)
        })
    }, [])
    return (
        <>
            <div className={styles.navHome}>
                <Link href='/home' className={styles.icon}><a>Tweeto <AiOutlineTwitter /></a></Link>
                <div className={styles.profile}>
                <Link href={`/profile/${id}`}><a>{profile.name} {profile.surname}</a></Link>
                <button onClick={() => {
                    dispatch({
                        type: 'LOGOUT'
                    })
                        router.push('/')
                    }}>Logout</button>
                </div>
            </div>
        </>
    )
}