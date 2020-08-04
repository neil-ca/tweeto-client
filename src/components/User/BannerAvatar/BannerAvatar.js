import React,{useState} from 'react'
import AvatarNotFound from "../../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../../utils/constant";
import { Button } from "react-bootstrap";
import ConfigModal from "../../Modal/ConfigModal"
import "./BannerAvatar.scss"

export default function BannerAvatar(props) {

    const {user, loggedUser} = props
    const [showModal, setshowModal] = useState(false)
    const bannerUrl = user?.banner ? `${API_HOST}/get-banner?id=${user.id}` : null
    const avatarUrl = user?.avatar ? `${API_HOST}/get-avatar?id=${user.id}` : AvatarNotFound
    
    return (
        <div className="banner-avatar"
        style={{ backgroundImage: `url('${bannerUrl}')`}}>
            
        <div className="avatar"
        style={{ backgroundImage: `url('${avatarUrl}')`}}/>
        
        {user && (
            <div className="options">
                {loggedUser._id === user.id && 
                <Button onClick={() => setshowModal(true)}>Editar perfil</Button>}
            
                {loggedUser._id !== user.id && <Button>Seguir</Button>}
            </div>
        )}
        <ConfigModal show={showModal} setShow={setshowModal} title="Editar perfil">
            Form...
        </ConfigModal>
        </div>
    )
}
