import { useEffect } from 'react'
import { useRouter } from "next/router"
import Cookie from 'js-cookie'
import Link from 'next/link'
import styles from '../styles/home.module.scss'

export default function Home({ tweets }) {
    const router = useRouter()
    const token = Cookie.get('token')
    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [])

    const logoutUser = (e) => {
        Cookie.remove('token')
        router.push('/')
    }
    if (tweets == null || tweets == '') {
        return (<>
        <h1>No tweets</h1>
        <button type="submit" onClick={logoutUser}>logout</button>
        </>)
    }
    return (
        <>
            <header className={styles.nav}>
                <button type="submit" onClick={logoutUser}>logout</button>
                <Link href="/profile/(id)"><a>profile</a></Link>
            </header>
           <div className={styles.container}>
               
                <div className={styles.tweets}>
                    {tweets.map((tweet) => (
                        <div>
                        <h1>{tweet.Tweet.message}</h1>
                        <h1>{tweet.Tweet.date}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}