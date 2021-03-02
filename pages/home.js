import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import styles from '../styles/home.module.scss'
import { decodeT, getUser } from '../services/user'
import Cookie from 'js-cookie'

export default function Home() {
    const [profile, setProfile] = useState([])
    const router = useRouter()
    const token = Cookie.get('token')
    useEffect(() => {
        let id = decodeT(token)._id
        getUser(id, token).then(response => {
            setProfile(response)
        })
    }, [])
    // console.log(token);
    const logoutUser = (e) => {
        Cookie.remove('token')
        router.push('/')
    }

    return (
        <div className={styles.container}>
            <h1>{profile.name} {profile.surname}</h1>

            <button type="submit" onClick={logoutUser}>logout</button>
        </div>
    )
}