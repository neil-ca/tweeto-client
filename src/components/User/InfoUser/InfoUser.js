import React from 'react'
import moement from "moment"
import localization from "moment/locale/es"
import { Location, Link, DateBirth} from "../../../utils/Icons"
import "./InfoUser.scss"

export default function InfoUser(props) {
    const {user } = props
    
    return (
        <div className="info-user">
           <h2 className="name">
           {user?.name} {user?.surname} </h2>
        <p className="email">{user?.email}</p>
        {user?.biography && <div className="description">{user.biography}</div>}
        
        <div className="more-info">
            {user?.location && ( 
            <p><Location/> {user.location}</p>)}

            {user?.siteweb && (
                <a href={user.siteweb} alt={user.siteweb} target="_blank"
                rel="noopener noreferrer"> <Link/> {user.siteweb} </a>
            )}

            {user?.dateofbirth && (
                <p><DateBirth/> {moement(user.dateofbirth)
                    .locale("es", localization)
                    .format("LL")}</p>
            )}
        </div>
        </div>
    )
}
