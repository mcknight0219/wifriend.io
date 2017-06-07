<template>
    <div>
        <section class="section" v-if="loggedIn">
            <div class="container">
                <div class="tabs is-centered">
                    <ul>
                        <li>
                            <router-link :to="{name: 'new'}" class="nav-item is-tab" active-class="is-active">
                                <span class="icon">
                                    <i class="fa fa-plus"></i>
                                </span>
                                <span>新文章</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'list'}" class="nav-item is-tab" active-class="is-active">
                                <span class="icon">
                                    <i class="fa fa-th-large" aria-hidden="true"></i>
                                </span>
                                <span>列表</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'setting'}" class="nav-item is-tab" active-class="is-active">
                                <span class="icon">
                                    <i class="fa fa-cog" aria-hidden="true"></i>
                                </span>
                                <span>设置</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
        </section>
        <section class="hero" v-else>
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-4 is-offset-4">
                    <article class="message is-warning">
                        <div class="message-header">
                            <p>警告</p>
                        </div>
                        <div class="message-body">
                           请先登陆，才可以看见这里的内容哦
                        </div>
                    </article>
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
        loggedIn() {
            return this.$store.getters.login
        }
    },

    data() {
        return {
            post: {
                title: '',
                seoTitle: '',
                content: '',
                tags: []
            }
        }
    },

    methods: {
    }
}
</script>

<style lang="scss">

</style>
