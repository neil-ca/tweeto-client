import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'
import Cookie from 'js-cookie'
import { decodeT, getUser } from '../../services/user'

export default function Profile() {
    const [profile, setProfile] = useState()
    const router = useRouter()
    const { id } = router.query
    const token = Cookie.get('token')
    useEffect(() => {
        if (token) {
            getUser(id, token).then(response => {
                setProfile(response)
            }).catch((err) => {
                <h1>{err}</h1>
            })
        }
    }) 
    return (
        <div>
            {
                (profile) ?
                    <h2>{profile.name}</h2>
                    : <h3>Hello</h3>
                
            }
        </div>

    )
} 