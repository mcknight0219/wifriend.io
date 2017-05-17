<template>
    <div>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
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
                                <li v-bind:class="{'is-active': newActive}">
                                    <a @click="activate('new')">
                                        <span class="icon">
                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                        </span>
                                        <span>新文章</span>
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
                        <Editor value="" v-if="tab === 'new'"></Editor>
                        <List v-if="tab === 'all'"></List>
                        <Setting v-if="tab === 'setting'"></Setting>
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
        allActive() {
            return this.tab === 'all'
        },

        newActive() {
            return this.tab === 'new'
        },

        settingActive() {
            return this.tab === 'setting'
        }
    },

    data() {
        return {
            tab: 'all'
        }
    },

    methods: {
        activate(tab) {
            this.tab = tab
        }
    }
}
</script>

<style lang="scss">

</style>
