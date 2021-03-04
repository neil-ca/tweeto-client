import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
// import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import { decodeT, getUser } from '../services/user'
import Cookie from 'js-cookie'
import Users from '../components/users'
import Menu from '../components/menu'

export default function Home() {
    const [profile, setProfile] = useState([])
    const router = useRouter()
    const token = Cookie.get('token')
    useEffect(() => {
        if (token) {
            let id = decodeT(token)._id
            getUser(id, token).then(response => {
                // console.log(response);
                setProfile(response)
            }).catch((err) => {
                <h1>{err}</h1>
            })
        } else {
            router.push('/login')
        }
    }, [])
    // console.log(token);
    return (
        <div className={styles.container}>
            <Menu className={styles.menu} />
            <div className={styles.userProfile}>
                <Image src='/profile.png' width="100" height="100" className={styles.profile} />
                <h1>{profile.name} {profile.surname}</h1>
                <h4>{profile.siteweb}</h4>
                <h4>{profile.biography}</h4>
                <h5>{profile.location}</h5>
            </div>
            <Users />
        </div>
    )
}