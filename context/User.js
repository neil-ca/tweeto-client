import {useReducer, createContext, useContext, useState} from 'react'
import {useRouter} from 'next/router'
import loginForm from '../components/loginForm'
const router = useRouter()
const UserStateContext = createContext()
const UserDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            


        case 'REGISTER':

        case 'LOGOUT':

        default: 
        throw new Error()
    }
}

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <UserDispatchContext.Provider value={dispatch}>
            <UserStateContext.Provider value={state}>
                {children}
            </UserStateContext.Provider>
        </UserDispatchContext.Provider>
    )
}

export const useUser = () => useContext(UserStateContext)
export const useDispatchUser = () => useContext(UserDispatchContext)