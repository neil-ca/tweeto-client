import Cookie from 'js-cookie'
import { useRouter } from "next/router"
import { useEffect } from 'react'
import Nav from '../components/nav'
import Tweets from '../components/tweets'
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
            <Tweets token={token} id={id}/>
        </div>
        
    )
}