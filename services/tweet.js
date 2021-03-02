const HOST = 'http://localhost:8080'

export function addTweet(message, token) {
    return fetch(`${HOST}/tweet`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `$Bearer ${token}`,
        },
        body: JSON.stringify(message),
    }).then((response) => {
        if (response.status >= 200 && response < 300) {
            return { code: response.status, message: 'Tweet created' }
        }
        return { code: response.status, message: 'something wrong, try again' }
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
        return response.json
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


