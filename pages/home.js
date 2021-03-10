import { useEffect, useState } from 'react'
// import { useRouter } from "next/router"
// // import Link from 'next/link'
// import Image from 'next/image'
// import styles from '../styles/home.module.scss'
// import { decodeT, getUser } from '../services/user'
import Cookie from 'js-cookie'
// import Users from '../components/users'
// import Menu from '../components/menu'
// import { useAuth } from '../context/Auth'
// import Link from 'next/link'
// import navS from '../styles/profile.module.scss'
// import { AiOutlineTwitter } from 'react-icons/ai'
import Nav from '../components/nav'
import { addTweet, getUserTweets } from '../services/tweet'
import { getUser } from '../services/user'

export default function Home() {
    const token = Cookie.get('token')
    const id = Cookie.get('id')
    const [message, setMessage] = useState('')
    const [tweet, setTweet] = useState('')
    const maxLength = 280
    const handle = (e) => {
        e.preventDefault()
        if(message.length > 0 && message.length <= maxLength) {
            addTweet(message, token).then(res => {
                console.log(res)
                // window.location.reload()
            }).catch(err => {alert(err)})
        }
    }
    useEffect(() => {
        getUserTweets(id, 1, token).then(res => setTweet(res[0].message))
        getUser(id, token).then(res => console.log(res))
    }, [])
    return (
        <div >
            <Nav/>
            <input type="text" placeholder="What's happening?" onChange={e => setMessage(e.target.value)}/>
            <button onClick={handle}>tweet</button><br/>
            <h1>{tweet}</h1>
        </div>
    )
}