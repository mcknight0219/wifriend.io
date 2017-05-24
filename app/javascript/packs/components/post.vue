<template>
    <div>
        <section class="section">
            <div class="fluid-container">
                <div class="columns">
                    <div class="column is-4 is-offset-4">
                        <h2 class="title is-2" style="font-weight: 400">{{ post.title }}</h2>
                        <nav class="level is-mobile">
                            <div class="level-left">
                                <div class="level-item">
                                    <span style="color: gray">{{ post.created_at}}</span>
                                </div>
                            </div>
                            <div class="level-right">
                                <div class="level-item">
                                    <span class="tag is-light" v-for="tag in post.tags">{{ tag }}</span>
                                </div>
                            </div>
                        </nav>
                        <div class="content">
                            {{ post.content }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        post () {
            return this.queryPost(this.$route.params)[0]
        }
    },

    methods: {
        queryPost({year, month, day, title}) {
            const posts = this.$store.getters.allPosts
            return posts.filter(p => new Date(p.created_at).getFullYear() === parseInt(year))
                .filter(p => new Date(p.created_at).getMonth() === parseInt(month) - 1)
                .filter(p => new Date(p.created_at).getDate() === parseInt(day))
                .filter(p => this.seoTitle(p.title) === title)
        },

        seoTitle(t) {
            return t.split('-')[1].trim()
        }
    }
}
</script>

<style>

</style>
