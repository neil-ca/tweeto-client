import React from 'react'
import AvatarNotFound from "../../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../../utils/constant";
import "./BannerAvatar.scss"

export default function BannerAvatar(props) {

    const {user} = props
    const bannerUrl = user?.banner ? `${API_HOST}/get-banner?id=${user.id}` : null
    const avatarUrl = user?.avatar ? `${API_HOST}/get-avatar?id=${user.id}` : AvatarNotFound
    
    console.log(user);
    
    return (
        <div className="banner-avatar"
        style={{ backgroundImage: `url('${bannerUrl}')`}}>
            
        <div className="avatar"
        style={{ backgroundImage: `url('${avatarUrl}')`}}/>
        </div>
    )
}
