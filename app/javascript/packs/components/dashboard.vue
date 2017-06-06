<template>
    <div>
        <section class="section" v-if="loggedIn">
            <div class="container">
                <div class="tabs is-centered">
                    <ul>
                        <li v-bind:class="{'is-active': newActive}">
                            <a @click="activate('new')">
                                <span class="icon">
                                    <i class="fa fa-plus"></i>
                                </span>
                                <span>新文章</span>
                            </a>
                        </li>
                        <li v-bind:class="{'is-active': allActive}">
                            <a @click="activate('all')">
                                <span class="icon">
                                    <i class="fa fa-th-large" aria-hidden="true"></i>
                                </span>
                                <span>列表</span>
                            </a>
                        </li>
                        <li v-bind:class="{'is-active': settingActive}">
                            <a @click="activate('setting')">
                                <span class="icon">
                                    <i class="fa fa-cog" aria-hidden="true"></i>
                                </span>
                                <span>设置</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <Editor :post="post" v-if="tab === 'edit'"></Editor>
                <Editor :post="post" v-if="tab === 'new'"></Editor>
                <List v-if="tab === 'all'" @edit="editPost"></List>
                <Setting v-if="tab === 'setting'"></Setting>
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
import Editor from './dashboard/editor'
import List from './dashboard/list'
import Setting from './dashboard/setting'

export default {
    components: {
        Editor,
        List,
        Setting
    },

    computed: {
        loggedIn() {
            return this.$store.getters.login
        },

        newActive() {
            const newTab = this.tab === 'new'
            if (newTab) {
                this.post = {
                    title: '',
                    seoTitle: '',
                    content: '',
                    tags: []
                }
            }
            return newTab
        },

        allActive() {
            return this.tab === 'all'
        },

        editActive() {
            return this.tab === 'edit'
        },

        settingActive() {
            return this.tab === 'setting'
        }
    },

    data() {
        return {
            tab: 'all',
            post: {
                title: '',
                seoTitle: '',
                content: '',
                tags: []
            }
        }
    },

    methods: {
        activate(tab) {
            this.tab = tab
        },

        editPost(post) {
            this.tab = 'edit'
            this.post = post
        }
    }
}
</script>

<style lang="scss">

</style>
