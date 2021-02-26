import Form from '../components/loginForm'
import styles from '../styles/layout.module.scss'
import Link from 'next/link'

export default function Register() {
    return (<>
        <header className={styles.container}>
            <Link href="/login"><a>Login</a></Link>
            <Link href="/"><a>Lobby</a></Link>
        </header>
        <Form /></>
    )
}