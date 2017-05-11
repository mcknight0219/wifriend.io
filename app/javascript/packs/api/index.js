import 'whatwg-fetch'

function request(method, path, body) {
    return fetch(path, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-Token': csrfToken()
        },
        credentials: 'same-origin',
        body: body
    })
}

export default {
    // Login using provided token
    login(token) {
        request('POST', '/api/v1/accesstoken', JSON.stringify({
            accesstoken: token
        }))
    }
}