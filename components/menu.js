import Link from 'next/link'
import { FaUserFriends } from 'react-icons/fa'
import { MdSystemUpdateAlt } from 'react-icons/md'
import styles from '../styles/home.module.scss'
export default function Menu() {
    return (
        <div className={styles.menu}>
            <Link href='/users'><a><FaUserFriends /> meet people</a></Link>
            <Link href='/friends'><a><FaUserFriends /> see friends</a></Link>
            <Link href='/update'><a><MdSystemUpdateAlt /> update profile</a></Link>
        </div>
    )
}