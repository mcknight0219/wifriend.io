import { allPosts } from '../api'
export default {
    toggleDropdown: ({commit}, opened) => {
        commit('TOGGLE_DROPDOWN', opened)
    },

    getAllPosts: ({commit}) => {
        allPosts.then(({ posts }) => {
            commit('RECEIVE_POSTS', posts)
        })
    }
}