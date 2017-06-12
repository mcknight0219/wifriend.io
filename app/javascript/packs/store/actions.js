import { allPosts, newPost, deletePost, updatePost, login, uploadImage } from '../api'
export default {
    toggleDropdown: ({commit}, opened) => {
        commit('TOGGLE_DROPDOWN', opened)
    },

    getAllPosts: ({commit}) => {
        allPosts().then((posts) => {
            commit('RECEIVE_POSTS', posts)
        })
    },

    newPost: ({commit}, { title, content, tags }) => {
        newPost(title, content, tags).then(( { post }) => {
            if (post === undefined) {
                // adding post failed
                commit('SET_PUBLISH_STATUS', 'failed')
                return
            }
            
            commit('ADD_POST', post)
            commit('SET_PUBLISH_STATUS', 'success')
        })        
    },

    updatePost: ({commit}, {id, title, content, tags}) => {
        updatePost(id, title, content, tags).then(({post}) => {
            if (post === undefined) {
                commit('SET_PUBLISH_STATUS', 'failed')
                return
            }

            commit('UPDATE_POST', post)
            commit('SET_PUBLISH_STATUS', 'success')
        })
    },

    deletePost: ({commit}, { id}) => {
        deletePost(id).then(({success}) => {
            if (success) {
                commit('DELETE_POST', { id })
            }
        })
    },

    login: ({commit}, password) => {
        login(password).then(({auth_token}) => {
            if (auth_token !== undefined) {
                window.localStorage.setItem('auth_token', auth_token)
                commit('LOGIN_USER')
            }
        })
    },

    logout: ({commit}) => {
        window.localStorage.removeItem('auth_token')
        commit('LOGOUT_USER')
    },

    checkAuth: ({commit}) => {
        if (window.localStorage.getItem('auth_token')) {
            commit('LOGIN_USER')
        }
    }
}