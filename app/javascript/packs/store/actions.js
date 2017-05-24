import { allPosts } from '../api'
export default {
    toggleDropdown: ({commit}, opened) => {
        commit('TOGGLE_DROPDOWN', opened)
    },

    getAllPosts: ({commit}) => {
        allPosts.then(({ posts }) => {
            commit('RECEIVE_POSTS', posts)
        })
    },

    newPost: ({commit}, { title, content, tags }) => {
        newPost.then(( { post }) => {
            if (post === undefined) {
                // adding post failed
                commit('SET_PULISH_STATUS', 'failed')
                return
            }
            commit('ADD_POST', post)
            commit('SET_PUBLISH_STATUS', 'success')
        })        
    }
}