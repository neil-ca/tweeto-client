import { useEffect, useState } from 'react'
// import { useRouter } from "next/router"
// // import Link from 'next/link'
// import Image from 'next/image'
// import styles from '../styles/home.module.scss'
// import { decodeT, getUser } from '../services/user'
// import Cookie from 'js-cookie'
// import Users from '../components/users'
// import Menu from '../components/menu'
// import { useAuth } from '../context/Auth'
// import Link from 'next/link'
// import navS from '../styles/profile.module.scss'
// import { AiOutlineTwitter } from 'react-icons/ai'
import Nav from '../components/nav'

export default function Home() {
    const [message, setMessage] = useState('')

    return (
        <div >
            <Nav/>
            <input type="text" placeholder="What's happening?"/>
       
        </div>
    )
}