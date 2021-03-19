import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatchAuth } from '../context/Auth';
import { signIn } from '../services/auth';
import { isEmailValid } from '../services/validations';
import styles from '../styles/auth.module.scss';

export default function loginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const dispatch = useDispatchAuth()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEmailValid(email)) {
            signIn({ email, password }).then(response => {
                dispatch({
                    type: "LOGIN",
                    payload: response.token
                })
                router.push('/home')
                if (response.message) {
                    alert(response.message)
                    router.push('/login')
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
                <button type="submit" className={styles.btn}>Login</button>
                <p>Not registered? <Link href="/register"><a>Create an account</a></Link> </p>
            </form>
        </div>
    )
}