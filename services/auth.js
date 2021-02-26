export function signIn(data) {
    return fetch('http://localhost:8080/login', {
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