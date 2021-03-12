import {FaUserFriends} from 'react-icons/fa'
import Link from 'next/link'
import styles from '../styles/home.module.scss'
export default function Menu() {
    return (
        <div className={styles.menu}>
            <Link href='/users'><a><FaUserFriends/> meet people</a></Link>
        </div>
    )
}