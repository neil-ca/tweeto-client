 import Link from 'next/link';
import {useState} from 'react'
import styles from '../styles/login.module.scss'
import {useRouter} from 'next/router'
async function loginUsert(data) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
} 
export default function loginForm() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()
    const handleSub = async e => {
        e.preventDefault()
        const token = await loginUsert({email, password})
        console.log(token);
        router.push('/')
    } 

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form method="POST" onSubmit={handleSub}>
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