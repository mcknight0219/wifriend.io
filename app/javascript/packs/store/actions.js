import { allPosts, newPost, deletePost } from '../api'
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
                commit('SET_PULISH_STATUS', 'failed')
                return
            }
            
            commit('ADD_POST', post)
            commit('SET_PUBLISH_STATUS', 'success')
        })        
    },

    deletePost: ({commit}, { id}) => {
        deletePost(id).then(({success}) => {
            if (success) {
                commit('DELETE_POST', { id })
            }
        })
    }
}