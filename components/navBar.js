import Link from 'next/link'
import styles from '../styles/nav.module.scss'

export default function NavBar() {
    return (
        <div className={styles.container}>
            <Link href="/"><a>Home</a></Link>
        </div>
    )    
}