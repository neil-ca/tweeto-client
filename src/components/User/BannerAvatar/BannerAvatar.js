import React,{useState, useEffect} from 'react'
import { Button } from "react-bootstrap";
import AvatarNotFound from "../../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../../utils/constant";
import { checkFollowApi, followUserApi, unFollowUserApi } from "../../../api/follow";
import ConfigModal from "../../Modal/ConfigModal"
import  EditUserForm  from "../EditUserForm";
import "./BannerAvatar.scss"


export default function BannerAvatar(props) {

    const {user, loggedUser} = props
    const [showModal, setshowModal] = useState(false)
    const [following, setFollowing] = useState(null)
    const [reloadFollow, setReloadFollow] = useState(false)
    const bannerUrl = user?.banner ? `${API_HOST}/banner?id=${user.id}` : null
    const avatarUrl = user?.avatar ? `${API_HOST}/avatar?id=${user.id}` : AvatarNotFound
    
    useEffect(() => {
        if(user) {
        checkFollowApi(user?.id).then(response => {
            if (response?.status) {
                setFollowing(true)
            }else {
                setFollowing(false)
            }
        })
    }
        setReloadFollow(false)
    }, [user, reloadFollow])

    const onFollow = () => {
        followUserApi(user.id).then(() => {
            setReloadFollow(true)
        })
    }

    const offFollow = () => {
        unFollowUserApi(user.id).then(() => {
            setReloadFollow(true)
        })
    }
    return (
        <div className="banner-avatar"
        style={{ backgroundImage: `url('${bannerUrl}')`}}>
            
        <div className="avatar"
        style={{ backgroundImage: `url('${avatarUrl}')`}}/>
        
        {user && (
            <div className="options">
                {loggedUser._id === user.id && 
                <Button onClick={() => setshowModal(true)}>Editar perfil</Button>}

                {loggedUser._id !== user.id && 
                    following !== null && 
                (following ? (
                <Button className="unfollow" onClick={offFollow}><span>Siguiendo</span></Button>) : (
                <Button onClick={onFollow}>Seguir</Button>))}
            </div>
        )}
        <ConfigModal show={showModal} setShow={setshowModal} title="Editar perfil">
            <EditUserForm user ={user} setshowModal={setshowModal}/>
        </ConfigModal>
        </div>
    )
}
