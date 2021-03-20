import Nav from '../components/nav'
import Cookie from 'js-cookie'
import Menu from '../components/menu'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { updateProfile } from '../services/user'
import styles from '../styles/auth.module.scss'

export default function Update() {
    const token = Cookie.get('token')
    const id = Cookie.get('id')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [biography, setBiography] = useState('')
    const [location, setLocation] = useState('')
    const [birth, setBirth] = useState('')
    const handle = (e) => {
        e.preventDefault()
        let dateofbirth = birth + 'T00:00:00Z'
        updateProfile({ name, surname, biography, location, dateofbirth }, token).then(res => {
            if (res.ok) {
                router.push('/home')
            } else {
                alert('Somethin wrong')
            }
        })
    }
    const router = useRouter()
    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    })
    return (
        <div className={styles.container}>
            <Nav id={id} token={token} />
            <h1>Update profile</h1>
            <form onSubmit={handle} method="post">
                <label htmlFor="name">name</label>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="name" />
                <label htmlFor="surname">surname</label>
                <input type="text" name="surname" value={surname} onChange={e => setSurname(e.target.value)} placeholder="surname" />
                <label htmlFor="biography">biography</label>
                <input type="text" name="biography" value={biography} onChange={e => setBiography(e.target.value)} placeholder="biography" />
                <label htmlFor="location">location</label>
                <input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="location" />
                <label htmlFor="dateofbirth">date of birth yyyy-mm-dd</label>
                <input type="text" name="dateofbirth" value={birth} onChange={e => setBirth(e.target.value)} placeholder="yyyy-mm-dd" />
                <button type="submit" className={styles.btn}>Update</button>
            </form>
            <Menu />
        </div>
    )
}