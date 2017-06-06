<template>
    <div>
        <section class="section">
            <div class="fluid-container">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <h2 class="title is-2" style="font-weight: 400">{{ title }}</h2>
                        <nav class="level is-mobile">
                            <div class="level-left">
                                <div class="level-item">
                                    <span style="color: gray">{{ date }}</span>
                                </div>
                            </div>
                            <div class="level-right">
                                <div class="level-item">
                                    <span class="tag is-light" v-for="tag in tags">{{ tag }}</span>
                                </div>
                            </div>
                        </nav>
                        <div class="content" v-html="content">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
var marked = require('marked')
import * as hljs from 'highlightjs'

export default {
    watch: {
        content(data) {
            this.$nextTick(function () {
                hljs.initHighlighting.called = false
                hljs.initHighlighting()
            })
        }
    },

    computed: {
        post () {
            return this.queryPost(this.$route.params)[0]
        },

        title () {
            if (this.post !== undefined) {
                return this.post.title.split('-')[0].trim()
            }
        },

        content () {
            if (this.post !== undefined) {
                return marked(this.post.content)
            }
        },

        tags () {
            if (this.post !== undefined) {
                return this.post.tags
            }
            return []
        },

        date () {
            if (this.post !== undefined) {
                return new Date(this.post.created_at).toDateString().substring(4)
            }
        }
    },

    methods: {
        queryPost({year, month, day, title}) {
            const posts = this.$store.getters.allPosts
            return posts.filter(p => new Date(p.created_at).getFullYear() === parseInt(year))
                .filter(p => new Date(p.created_at).getMonth() === parseInt(month) - 1)
                .filter(p => new Date(p.created_at).getDate() === parseInt(day))
                .filter(p => this.seoTitle(p.title).replace(/ +/g, '-') === title)
        },

        seoTitle(t) {
            return t.split('-')[1].trim()
        }
    },

    mounted () {
        hljs.initHighlightingOnLoad()
    },

    updated () {
        debugger
        hljs.initHighlighting()
    }
}
</script>

<style lang="scss">
@import "~highlightjs/styles/default"
</style>
