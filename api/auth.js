import { API_HOST } from "../utils/constant";
export function signInApi(user) {
    const url = `${API_HOST}/login`

    const data = {
        ...user,
        email: user.email.toLowerCase()
    }

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch(url, params).then(response => {
        if(response.status >= 200 && response.status < 300) {
            return response.json()
        }
        return { message: "Usuario o contraseña no validos"}
    })
    .then(result => {
        return result   
    })

    .catch(err => {
        return err
    })
}
