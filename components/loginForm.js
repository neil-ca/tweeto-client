import Link from 'next/link';
import styles from '../styles/login.module.scss';
export default function Form() {
    const loginUser = async event => {
        event.preventDefault()
        const res = await fetch(

        )
    }
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={loginUser} >
                <label htmlFor="name">username</label>
                <input id="name" type="text" autoComplete="name" required placeholder="username"/>
                <label htmlFor="password">password</label>
                <input id="password" type="password" required placeholder="password" />
                <button type="submit">Login</button>
                <p>Not registered? <Link href="/register"><a>Create an account</a></Link> </p>
            </form>
        </div>
    )
}