import { AiOutlineTwitter } from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {FaUserFriends} from 'react-icons/fa'
import {useRouter} from 'next/router'
import Cookie from 'js-cookie'
import styles from '../styles/home.module.scss'
export default function Menu() {
    const router = useRouter()
    const logoutUser = (e) => {
        Cookie.remove('token')
        router.push('/')
    }
    return (
        <div className={styles.menu}>
            <h2>Tweeto <AiOutlineTwitter/></h2>
            <h3><BsPencilSquare/> write a tweet</h3>
            <h3><CgProfile/> my profile</h3>
            <h3><FaUserFriends/> meet people</h3>
            <button type="submit" onClick={logoutUser}>logout</button>
        </div>
    )
}