<template>
    <section class="section">
        <div class="container">
            <div class="blog-list">
                 <div class="columns" style="margin-top: 23px;" v-for="post in posts">
                    <div class="column is-offset-2 is-2">
                        <div>
                            <span class="icon"><i class="fa fa-calendar" aria-hidden="true"></i></span> {{ getDate(post) }}
                        </div>
                        <div style="margin-top: 7px;">
                            <span class="tag is-light" v-for="tag in post.tags">{{ tag }}</span>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="blog-post-summary">
                            <router-link :to="{ name: 'post', params: { year: getYear(post), month: getMonth(post), day: getDay(post), title: getSeoTitle(post) }}">
                                <h3 class="title is-3">{{ getTitle(post) }}</h3>
                            </router-link>
                            
                            <p style="margin-top: 13px;">{{ getSummary(post) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
var marked = require('marked')

export default {
    computed: {
        posts () {
            return this.$store.getters.allPosts
        }
    },

    methods: {
        // Basically, we get the first <p> of rendered html
        getSummary(post) {
            const html = marked(post.content)
            let el = document.createElement('dummy')
            el.innerHTML = html
            let text = el.getElementsByTagName('p')[0].innerText
            return text.length < 120 ? text : text.substr(0, 120)
        },

        getSeoTitle(post) {
            return post.title.split('-')[1].trim()
        },

        getTitle(post) {
            return post.title.split('-')[0].trim()
        },

        getDate(post) {
            return new Date(post.created_at).toDateString().substring(4)
        },

        getYear(post) {
            return new Date(post.created_at).getFullYear()
        },

        getMonth(post) {
            return ("0" + (new Date(post.created_at).getMonth() + 1)).slice(-2)
        },

        getDay(post) {
            return ("0" + new Date(post.created_at).getDate()).slice(-2)
        },
    },

    created() {
        this.$store.dispatch('getAllPosts')
    }
}
</script>

<style lang="scss">

</style>

