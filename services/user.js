const HOST = 'https://tweeto1.herokuapp.com'
const LOCALHOST = 'http://localhost:8080'

export function getUser(id, token) {
    const url = `${HOST}/view/profile?id=${id}`
    const params = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return fetch(url, params).then(response => {
        if (response.status >= 400) throw null
        return response.json()
    }).then(result => { return result })
        .catch(err => { return err })
}

export function uploadBanner(file, token) {
    const url = `${HOST}/banner-up`
    const formData = new FormData()
    formData.append('banner', file)

    const params = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    }
    return fetch(url, params).then(response => {
        return response.json()
    }).then(result => { return result })
        .catch(err => { return err })
}

export function uploadAvatar(file, token) {
    const url = `${HOST}/avatar-up`
    const formData = new FormData()
    formData.append('avatar', file)

    const params = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    }
    return fetch(url, params).then(response => { return response.json() })
        .then(result => { return result })
        .catch(err => { return err })
}
export function updateProfile(data, token) {
    const url = `${HOST}/profile`
    const params = {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }
    return fetch(url, params).then(response => { return response })
        .catch(err => { return err })
}
export function decodeT(token) {
    // Object
    let str = JSON.parse(atob(token.split('.')[1]))
    // string -> let str2 = atob(token.split('.')[1])
    // let str = jwt_decode(token)
    return str
}