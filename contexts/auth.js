import { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, {useRouter} from 'next/router'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            if(token) {
                
            }
        } 
    })
}