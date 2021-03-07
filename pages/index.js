import Link from 'next/link'
import styles from '../styles/nav.module.scss'

export default function index() {
  return (
    <>
      <header className={styles.container}>
        <Link href="/login"><a>Login</a></Link>
        <Link href="/register"><a>Register</a></Link>
      </header>
      <img src="https://i.mdel.net/mdx/i/2015/02/1_MG_7080.jpg"/>
      <p></p>
    </>
  )
}
