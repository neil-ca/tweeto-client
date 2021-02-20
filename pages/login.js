import Form from '../components/loginForm'
import NavBar from '../components/navBar'
import {useRouter} from 'next/router'
export default function Login() {
    const router = useRouter()
    return(    
        <>
        <NavBar/>
        <Form/>
        </>
    )
}