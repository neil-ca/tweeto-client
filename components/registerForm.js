import styles from '../styles/login.module.scss'
export default () => {
    return (
        <div className={styles.container}>
            <h1>Register</h1>
            <form >
                <label htmlFor="email">email</label>
                <input id="email" name="email" type="email" autoComplete="email" required placeholder="email" />
                <label htmlFor="password">password</label>
                <input id="password" name="password" type="password" required placeholder="password" />
                <button type="submit" onSubmit={handleSubmit}>Login</button>
                <p> <Link href="/register"><a>Create an account</a></Link> </p>
            </form>
        </div>
    )
}