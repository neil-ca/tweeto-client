import Link from 'next/link';
import { useState } from 'react'
import { signIn } from '../services/auth'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import { isEmailValid } from '../utils/validations'
import styles from '../styles/login.module.scss'

export default function loginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEmailValid(email)) {
            signIn({email, password}).then(response => {
                if (response.message) {
                    alert(response.message)
                } else {
                    console.log(response);
                    Cookie.set('token', response.token, {expires: 1})
                    router.push('/home')
                }
            }).catch(() => {
                alert('error server')
            })
        } else {
            alert('invalid email ')
        }
    }
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input name="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
                <label htmlFor="password">password</label>
                <input name="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
                <button type="submit">Login</button>
                <p>Not registered? <Link href="/register"><a>Create an account</a></Link> </p>
            </form>
        </div>
    )
}