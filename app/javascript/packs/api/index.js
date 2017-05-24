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
        body: body === undefined ? '' : JSON.stringify(body)
    }).then(response => response.json())
}


// Login using provided token
export function login(token) {
    return request('POST', '/api/v1/accesstoken', {
        accesstoken: token
    })
}

export function allPosts() {
    return request('GET', '/api/v1/posts')
}

export function newPost(title, content, tags) {
    debugger
    return request('POST', '/api/v1/posts', {
        title,
        content,
        tags
    })
}