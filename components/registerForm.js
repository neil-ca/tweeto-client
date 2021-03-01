import Link from 'next/link';
import { useState } from 'react'
import { signUp } from '../services/auth'
import { useRouter } from 'next/router'
import styles from '../styles/auth.module.scss'
import { isEmailValid } from '../services/validations';

export default function registerForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEmailValid(email)) {
            signUp({ email, password, name, surname }).then(response => {
                if (response.message) {
                    alert(response.message)
                } else if (response.success){
                    alert(response.success)
                    router.push('/login')
                }
            }).catch(() => alert('error server'))
        } else {
            alert('invalid email')
        }
    }
    return (
        <div className={styles.container}>
            <h1>Register</h1>
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input name="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
                <label htmlFor="password">password</label>
                <input name="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
                <label htmlFor="name">name</label>
                <input name="name" type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="name" />
                <label htmlFor="surname">last name</label>
                <input name="surname" type="text" required value={surname} onChange={e => setSurname(e.target.value)} placeholder="last name" />
                <button type="submit" >Register</button>
                <p> <Link href="/login"><a>You have an account</a></Link></p>
            </form>
        </div>
    )
}