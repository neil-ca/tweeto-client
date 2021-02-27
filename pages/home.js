import { useEffect } from 'react'
import { useRouter } from "next/router"
import Cookie from 'js-cookie'

export default function Home({ users }) {
    const router = useRouter()
    const token = Cookie.get('token')
    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [])

    const logoutUser = (e) => {
        Cookie.remove('token')
        router.push('/')
    }
    return (
        <>
            <h1>Hello this is tweeto</h1>
            <button type="submit" onClick={logoutUser}>logout</button>
            <ul>
                {users.map((user) => (
                    <li>[{user.name},
                        {user.email}]</li>
                ))}
            </ul>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:8080/list/users?page=1&type=follow')
    const users = await res.json()

    return {
        props: {
            users,
        },
    }
}