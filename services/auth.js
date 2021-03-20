const HOST = 'https://tweeto1.herokuapp.com'
const LOCALHOST = 'http://localhost:8080'
export function signIn(data) {
    return fetch(`${HOST}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json()
        }
        return { message: 'User or password invalids' }
    }).then(result => {
        return result
    }).catch(err => {
        return err
    })
}
export function signUp(data) {
    return fetch(`${HOST}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return { success: 'user created'}
        }
        return { code: 404, message: 'Email no valid or already exists' }
    }).then(result => {
        return result
    }).catch(err => {
        return err
    })
}
// export function isExpired(token) {
//     const { exp } = jwt_decode(token)
//     const expire = exp * 1000
//     const timeout = expire - Date.now()
//     if (timeout < 0) {
//         return true
//     }
//     return false
// }