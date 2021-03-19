import Cookie from 'js-cookie'
import { useRouter } from "next/router"
import { useEffect } from 'react'
import Menu from '../components/menu'
import Nav from '../components/nav'
import Tweets from '../components/Tweets'
import styles from '../styles/home.module.scss'

export default function Home() {
    const router = useRouter()
    const token = Cookie.get('token')
    const id = Cookie.get('id')
    useEffect(() => {
        if (!token)
            router.push('login')
    }, [])
    return (
        <div className={styles.container}>
            <Nav token={token} id={id}/>
            <Menu/>
            <Tweets token={token}/>
        </div>
        
    )
}