const HOST = 'https://tweeto1.herokuapp.com'
const LOCALHOST = 'http://localhost:8080'
export function addTweet(message, token) {
    const data = {
        message,
    }
    return fetch(`${HOST}/tweet`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `$Bearer ${token}`,
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.ok) {
            return { code: response.status, message: 'Tweet created' }
        } else 
        return { code: 500, message: 'something wrong, try again' }
    }).catch((err) => { return err })
}

export function getUserTweets(idUser, page, token) {
    const url = `${HOST}/tweets?id=${idUser}&page=${page}`
    const params = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    }
    return fetch(url, params).then((response) => {
        return response.json()
    }).catch((err) => { return err })
}
export function getTweetsFollowers(page = 1, token) {
    const url = `${HOST}/tweetsFollowers?page=${page}`
    const params = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    }
    return fetch(url, params).then((response) => {
        return response.json()
    }).catch((err) => { return err })
}


