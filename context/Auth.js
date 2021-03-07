import { useReducer, createContext, useContext } from 'react'
import Cookie from 'js-cookie' 

const initialState = {
    email: '',
    password: '',
    isAuthenticated: false
}
const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

const reducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            Cookie.set('token', action.payload, {expires: 1})
            return {
                ...state,
                isAuthenticated: true
            }
        case 'LOGOUT':
            Cookie.remove('token')
            return {
                ...state,
                isAuthenticated: false
            }
        default: 
        throw new Error(`Unknown action: ${action.type}`)
    }
}

export const AuthProvider = ({ children })  => {
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