import { useEffect, useState } from "react"
import { addTweet, getTweetsFollowers, getUserTweets } from "../services/tweet"
import styles from '../styles/home.module.scss'

export default function Tweets({ token, id }) {
    const [message, setMessage] = useState('')
    const [tweets, setTweets] = useState([])
    const [twFollowers, setTwFollowers] = useState([])
    const maxLength = 280
    const handle = (e) => {
        e.preventDefault()
        if (message.length > 0 && message.length <= maxLength) {
            addTweet(message, token).then(res => {
                // console.log(res);
                alert(res.message)
                window.location.reload()
            }).catch(err => { alert(err) })
        }
    }
    useEffect(() => {
        getUserTweets(id, 1, token).then(
            setTweets
        ).catch(err => { <h1>{err}</h1> })
        getTweetsFollowers(1, token).then(
            setTwFollowers
        )
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
                        <div key={tweet._id}>
                            <h1>{tweet.message}</h1>
                        </div>
                        // )   
                    ))}
                    {twFollowers != null ? twFollowers.map((twf) => (
                        <h1>{twf}</h1>
                    )) : <h1>No tweets of followers</h1>}
                </section>
                : <h1>No tweets</h1>}
        </div>
    )
}