import { useEffect, useState } from "react"
import { addTweet, getTweetsFollowers, getUserTweets } from "../services/tweet"
import { getUser } from "../services/user"
import styles from '../styles/home.module.scss'

export default function Tweets({ token, id }) {
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
                // window.location.reload()
            }).catch(err => { alert(err) })
        } else {
            alert('A tweet must be less than 280 characters, try again')
        }
    }
    useEffect(() => {
        getTweetsFollowers(1, token).then(res => {
            setTweets(res)
            // console.log(res[0].userRelationId)
            // (res.map(t => id = [...new Set (t.userRelationId)]))
            res.map(t => {
                getUser(t.userRelationId, token).then(setInfoUser)
            })
        }
        ).catch(err => { <h1>{err}</h1> })
        // getUser(idUser[1], token).then(res => {console.log(res)})
        console.log(infoUser)
    }, [])
    return (
        <div className={styles.ctn_tweets}>
            <section className={styles.create_tweet}>
                <textarea placeholder="What's happening?" onChange={e => setMessage(e.target.value)} rows="4" cols="30" required />
                <button onClick={handle}>tweet</button>
            </section>
            <div>
{/* 
                {infoUser.map((user) => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                    </div>
                ))} */}

            </div>
            {tweets != null ?
                <section className={styles.list_tweets}>

                    {tweets.map((tweet) => (
                        // return (
                        <div key={tweet.Tweet._id}>
                            <p>{tweet.Tweet.message} <span>{tweet.Tweet.date}</span></p>
                        </div>
                        // )   
                    ))}
                </section>
                : <h1>No tweets found</h1>}
        </div>
    )
}