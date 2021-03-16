import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getUser } from '../../services/user'
import { AiOutlineTwitter, AiOutlineUserAdd } from 'react-icons/ai'
import styles from '../../styles/profile.module.scss'
import { checkFollow, followUser, unfollowUser } from '../../services/follow'
import Cookie from 'js-cookie'

export default function Profile() {
    const [profile, setProfile] = useState()
    const [following, setFollowing] = useState(null)

    const router = useRouter()
    const id = router.query.id
    const token = Cookie.get('token')
    // const id = Cookie.get('id')
    const ofFollow = () => {
        unfollowUser(id, token).then(() => {
            setFollowing(false)
        })
    }
    const onFollow = () => {
        followUser(id, token).then(() => {
            setFollowing(true)
        })
    }
    useEffect(() => {
        if (token) {
            getUser(id, token).then(response => {
                setProfile(response)
            }).catch((err) => {
                <h1>{err}</h1>
            })
            checkFollow(id, token).then(res => {
                if (res?.status) {
                    setFollowing(true)
                } else {
                    setFollowing(false)
                }
            })
        } else {
            router.push('/login')
        }
    }, [following])
    return (<>
        <div className={styles.nav}>
            <Link href="/home"><a>Tweeto <AiOutlineTwitter /></a></Link>
        </div>
        <div className={styles.container}>
            {
                (profile == null) ? <h3>oh oh!</h3> :
                    <div className={styles.info}>
                        <h1>{profile.name} {profile.surname}</h1>
                        <h2>{profile.biography}</h2>
                        <h3>{profile.email} {profile.location}</h3>
                        <h4>{profile.dateofbirth}</h4>
                        {following ? 
                        <button onClick={ofFollow}>Following <AiOutlineUserAdd/></button>
                        : <button onClick={onFollow}>Follow <AiOutlineUserAdd/></button>}
                    </div>
            }
        </div>
    </>
    )
}