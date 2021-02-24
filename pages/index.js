import Link from 'next/link'
import styles from '../styles/layout.module.scss'

export default function Home() {
  return (
    <header className={styles.container}>
      <Link href="/login"><a>Login</a></Link>
      <Link href="/register"><a>Register</a></Link>
    </header> 
  )
}
