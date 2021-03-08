import { useReducer, createContext, useContext } from 'react'
import Cookie from 'js-cookie'
import { decodeT } from '../services/user'

const initialState = {
    token: ''
}
const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            Cookie.set('token', action.payload, { expires: 1 })            
            let token = Cookie.get('token')
            let user = decodeT(token)
            Cookie.set('id', user._id)
            return {
                ...state,
                token: user
            }
        case 'LOGOUT':
            return (
                Cookie.remove('token'),
                Cookie.remove('id')
            )
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthDispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={state}>
                {children}
            </AuthStateContext.Provider>
        </AuthDispatchContext.Provider>
    )
}

export const useAuth = () => useContext(AuthStateContext)
export const useDispatchAuth = () => useContext(AuthDispatchContext)