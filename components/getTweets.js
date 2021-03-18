import { useEffect, useState } from "react"
import Link from 'next/link'
import { getUsers } from "../services/follow"
import { addTweet, getTweetsFollowers } from "../services/tweet"
import styles from '../styles/home.module.scss'
import { AiOutlineTwitter } from "react-icons/ai"

export default function Tweets({ token }) {
    const [message, setMessage] = useState('')
    const [tweets, setTweets] = useState([])
    const [infoUser, setInfoUser] = useState([])
    const maxLength = 280
    const handle = (e) => {
        e.preventDefault()
        if (message.length > 0 && message.length <= maxLength) {
            addTweet(message, token).then(res => {
                // console.log(res);
                alert(res.message)
                window.location.reload()
            }).catch(err => { alert(err) })
        } else {
            alert('A tweet must be less than 280 characters, try again')
        }
    }
    useEffect(() => {
        getUsers(token, 'follow').then(setInfoUser)
        getTweetsFollowers(1, token).then(setTweets)
        .catch(err => { <h1>{err}</h1> })
    }, [])
    return (
        <div className={styles.ctn_tweets}>
            <section className={styles.create_tweet}>
                <textarea placeholder="What's happening?" onChange={e => setMessage(e.target.value)} rows="4" cols="30" required />
                <button onClick={handle}>tweet</button>
            </section>
            {tweets != null ?
                <section className={styles.list_tweets}>
                    {tweets.map((tweet) => (
                        // return (
                        <div key={tweet.Tweet._id}>
                            {infoUser.map((user, index) => (
                                <Link key={index} href={`/profile/${user.id}`}><a>{tweet.userRelationId == user.id && user.name + ' ' +  user.surname}</a></Link>
                            ))}
                            <AiOutlineTwitter/>
                            <p>{tweet.Tweet.message}</p>
                            <h2>{tweet.Tweet.date}</h2>
                        </div>
                        // )   
                    ))}
                </section>
                : <h1>No tweets found</h1>}

        </div>
    )
}