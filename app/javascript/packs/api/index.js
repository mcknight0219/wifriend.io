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

// Login using provided token
export function login(token) {
    return POST('/api/v1/accesstoken', {
        accesstoken: token
    })
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