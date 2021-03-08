import Link from 'next/link'
import styles from '../styles/nav.module.scss'

export default function index() {
  return (
    <>
      <header className={styles.container}>
        <Link href="/login"><a>Login</a></Link>
        <Link href="/register"><a>Register</a></Link>
      </header>
    </>
  )
}
