<template>
    <section class="section" style="padding-top: 0;">
        <div class="fluid-container">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <ul class="article-list">
                        <li v-for="post in posts">
                            <router-link :to="{ name: 'post', params: { year: year(post.created_at), month: month(post.created_at), day: day(post.created_at), title: seoTitle(post.title) }}">
                                <div class="article-title">{{ readableTitle(post.title) }} <span class="tag is-light">草稿</span></div>
                                <div class="subtitle">
                                    <a href="" class="is-link" style="color: gray">编辑</a>
                                    <a href="" class="is-link" style="color: red; margin-left: 7px;">删除</a>
                                    <span class="pull-right">{{ formatDate(post.created_at) }}</span>
                                </div>
                            </router-link>
                        </li>
                    </ul>   
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        posts () {
            return this.$store.getters.allPosts
        }
    },

    methods: {
        year(s) {
            return new Date(s).getFullYear()
        },

        month(s) {
            return ("0" + (new Date(s).getMonth() + 1)).slice(-2)
        },

        day(s) {
            return ("0" + new Date(s).getDate()).slice(-2)
        },

        formatDate(s) {
            const d = new Date(s)
            return d.toDateString().substring(4)
        },

        readableTitle(t) {
            return t.split('-')[0].trim()
        },

        seoTitle(t) {
            return t.split('-')[1].trim()
        }
    }
}
</script>

<style lang="scss">
    .article-list {
        list-style: none;
        li {
            padding: 15px 8px;

            .article-title {
                color: black;
                font-size: 1.25em;
                font-weight: 300;
            }

            .subtitle {
                margin-top: 5px;
                font-size: 1em;
            }
        }
        
    }
</style>
