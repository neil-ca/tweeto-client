import Link from 'next/link'
import styles from '../styles/layout.module.scss'
import { useCount, useDispatchCount } from '../context/Counter'

export default function index() {
  const count = useCount()
  const dispatch = useDispatchCount()
  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE_BY',
      payload: 30 - 5
    })
  const handleIncrease15 = (event) =>
    dispatch({
      type: 'DECREASE',
    })
  return (
    <>
      <header className={styles.container}>
        <Link href="/login"><a>Login</a></Link>
        <Link href="/register"><a>Register</a></Link>
      </header>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
      <p></p>
    </>
  )
}
