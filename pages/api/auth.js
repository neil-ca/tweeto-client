export default function login(req, res) {
    res.status(200).json({ name : 'JOn doe', age: 16})
}

// import { API_HOST, TOKEN } from "../../utils/constants";
// import JWTDecode from 'jwt-decode'
// export function signIn(user) {
//     const url = `${API_HOST}/login`

//     const data = {
//         ...user,
//         email: user.email.toLowerCase()
//     }

//     const params = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     }
//     return fetch(url, params).then(response => {
//         if(response.status >= 200 && response.status < 300) {
//             return response.json()
//         }
//         return { message: "Usuario o contraseña no validos"}
//     })
//     .then(result => {
//         return result   
//     })

//     .catch(err => {
//         return err
//     })
// }
// export function setToken(token) {
//     localStorage.setItem(TOKEN, token)
// }
// export function getToken(){
//     return localStorage.getItem(TOKEN)
// }
// export function logout() {
//     localStorage.removeItem(TOKEN)
// }
// export function isUserLoged() {
//     const token = getToken()
//     if (!token) {
//         logout()
//         return null
//     }
//     if (isExpired(token)) {
//         logout()
//     }
//     return JWTDecode(token)
// }
// function isExpired(token) {
//     const { exp } = JWTDecode(token)
//     const expire = exp * 1000
//     const timeout = expire - Date.now()
//     if (timeout < 0) {
//         return true
//     }
//     return false
// }

