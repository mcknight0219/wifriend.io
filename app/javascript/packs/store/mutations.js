export default {
    TOGGLE_DROPDOWN: (state, opened) => {
        state.showDropdown = opened
    },

    RECEIVE_POSTS: (state, posts) => {
        state.posts = posts
    },

    DELETE_POST: (state, { id }) => {
        const index = state.posts.findIndex(p =>  p.id === id )
        if (index !== -1) {
            state.posts.splice(index, 1)
        }
    },

    ADD_POST: (state, post) => {
        state.posts.push(post)
    },

    UPDATE_POST: (state, post) => {
        const index = state.posts.findIndex(p => p.id === post.id)
        if (index !== -1) {
            state.posts.splice(index, 1)
            state.posts.unshift(post)
        }
    },

    SET_PUBLISH_STATUS: (state, status) => {
        state.publishStatus = status
    }
}