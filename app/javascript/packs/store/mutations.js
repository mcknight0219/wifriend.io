export default {
    TOGGLE_DROPDOWN: (state, opened) => {
        state.showDropdown = opened
    },

    RECEIVE_POSTS: (state, posts) => {
        state.posts = posts
    },

    DELETE_POST: (state, { id }) => {
        const index = posts.findIndex( (p) => { p.id === id })
        if (index !== -1) {
            state.posts.splice(index, 1)
        }
    },

    ADD_POST: (state, { post }) => {
        state.posts.push(post)
    },

    SET_PUBLISH_STATUS: (state, status) => {
        state.publishStatus = status
    }
}