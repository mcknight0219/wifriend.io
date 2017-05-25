<template>
    <div>
        <section class="section">
            <div class="container">
                <div class="tabs is-centered">
                    <ul>
                        <li v-bind:class="{'is-active': allActive}">
                            <a @click="activate('all')">
                                <span class="icon">
                                    <i class="fa fa-th-large" aria-hidden="true"></i>
                                </span>
                                <span>列表</span>
                            </a>
                        </li>
                        <li v-bind:class="{'is-active': editActive}">
                            <a @click="activate('edit')">
                                <span class="icon">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                                <span>编辑文章</span>
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
                <List v-if="tab === 'all'" @edit="editPost"></List>
                <Setting v-if="tab === 'setting'"></Setting>
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
