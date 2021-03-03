import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
// import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import { decodeT, getUser } from '../services/user'
import Cookie from 'js-cookie'
import Users from '../components/users'

export default function Home() {
    const [profile, setProfile] = useState([])
    const router = useRouter()
    const token = Cookie.get('token')
    useEffect(() => {
        let id = decodeT(token)._id
        getUser(id, token).then(response => {
            console.log(response);
            setProfile(response)
        }).catch((err) => {
            <h1>{err}</h1>
        })
    }, [])
    // console.log(token);
    const logoutUser = (e) => {
        Cookie.remove('token')
        router.push('/')
    }

    return (<>
        <div className={styles.container}>
            <Image src='/profile.png' width="100" height="100" className={styles.profile}/>
            <h1>{profile.name} {profile.surname}</h1> 
            <h2>{profile.email} <br/>{profile.siteweb}</h2>
            <h4>{profile.location} {profile.dateofbirth}</h4>
            <button type="submit" onClick={logoutUser}>logout</button> 
        </div>
        <Users/>
    </>)
}