import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
// import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import { decodeT, getUser } from '../services/user'
import Cookie from 'js-cookie'
import Users from '../components/users'
import Menu from '../components/menu'
import { useAuth } from '../context/Auth'
import Link from 'next/link'
import navS from '../styles/profile.module.scss'
import {AiOutlineTwitter} from 'react-icons/ai'

export default function Home() {
    const [profile, setProfile] = useState([])
    const router = useRouter()
    const auth = useAuth()
    const token = Cookie.get('token')
    let id = decodeT(token)._id
    useEffect(() => {
        {
            !auth.isAuthenticated || !token ?
            router.push('/login')
            :
                getUser(id, token).then(response => {
                    setProfile(response)
                }).catch((err) => {
                    <h1>{err}</h1>
                })
        }
    }, [])
    return (
        <div className={styles.container}>
            <div className={navS.nav}>
                <Link href="/home"><a>Tweeto <AiOutlineTwitter /></a></Link>
            </div>
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