<template>
<div>
    <section class="section">
        <div class="container">
            <div class="tabs is-centered">
                <ul>
                    <li v-bind:class="{'is-active': allActive}" >
                        <a @click="activate('all')">所有文章</a>
                    </li>
                    <li v-bind:class="{'is-active': newActive}">
                        <a  @click="activate('new')">新文章</a>
                    </li>
                    <li v-bind:class="{'is-active': settingActive}">
                        <a  @click="activate('setting')">设置</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <Editor value="" v-if="tab === 'new'"></Editor>
    <List v-if="tab === 'all'"></List>
    <Setting v-if="tab === 'setting'"></Setting>
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
        allActive () {
            return this.tab === 'all'
        },

        newActive () {
            return this.tab === 'new'
        },

        settingActive () {
            return this.tab === 'setting'
        }
    },

    data () {
        return {
            tab: 'all'
        }
    },

    methods: {
        activate (tab) {
            this.tab = tab
        }
    }
}
</script>

<style lang="scss">

</style>
