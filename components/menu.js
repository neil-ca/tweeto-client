import { AiOutlineTwitter } from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {FaUserFriends} from 'react-icons/fa'
import {useRouter} from 'next/router'
import Cookie from 'js-cookie'
import Link from 'next/link'
import styles from '../styles/home.module.scss'
import { decodeT } from '../services/user'
import { useDispatchAuth } from '../context/Auth'
export default function Menu() {
    const router = useRouter()
    const dispatch = useDispatchAuth()
    const token = Cookie.get('token')
    let id = decodeT(token)._id
    return (
        <div className={styles.menu}>
            <h2>Tweeto <AiOutlineTwitter/></h2>
            <h3><BsPencilSquare/> write a tweet</h3>
            <Link href={`/profile/${id}`}><a><CgProfile/> my profile </a></Link>
            <h3><FaUserFriends/> meet people</h3>
        </div>
    )
}