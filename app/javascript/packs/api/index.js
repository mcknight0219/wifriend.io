import 'whatwg-fetch'

function csrfToken() {
    const tags = document.getElementsByTagName("meta")
    for (var i = 0; i < tags.length; i++) {
        if (tags[i].name === 'csrf-token') {
            return tags[i].getAttribute('content')
        }
    }
    return ''
}

function POST(path, body) {
    return fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-Token': csrfToken()
        },
        credentials: 'same-origin',
        body: body
    }).then(response => response.json())
}

function GET(path) {
    return fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    }).then(response => response.json())
}

function DELETE(path) {
    return fetch(path, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-Token': csrfToken(),
            'Authorization': 'Basic ' + getJwt()
        },
        credentials: 'same-origin'
    }).then(response => response.json())
}

function PATCH(path, body) {
    return fetch(path, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-Token': csrfToken(),
            'Authorization': 'Basic ' + getJwt()
        },
        credentials: 'same-origin',
        body: body
    }).then(response => response.json())
}

function getJwt() {
    return window.localStorage.getItem('auth_token')
}

// Login using provided token
export function login(password) {
    return POST('/api/v1/auth_user', JSON.stringify({
        password: password
    }))
}

export function allPosts() {
    return GET('/api/v1/posts')
}

export function newPost(title, content, tags) {
    return POST('/api/v1/posts', JSON.stringify({
        post: {
            title,
            content,
            tags
        }
    }))
}

export function updatePost(id, title, content, tags) {
    return PATCH('/api/v1/posts/' + id, JSON.stringify({
        post: {
            title,
            content,
            tags
        }
    }))
}

export function deletePost(id) {
    return DELETE('/api/v1/posts/' + id)
}