<template>
<div>
    <section class="section">
        <div class="container">
            <div class="tabs is-centered">
                <ul>
                    <li v-bind:class="{'is-active': allActive}" >
                        <a @click="activate('all')"><span class="icon"><i class="fa fa-th-large" aria-hidden="true"></i>列表</span></a>
                    </li>
                    <li v-bind:class="{'is-active': newActive}">
                        <a  @click="activate('new')"><span class="icon"><i class="fa fa-pencil" aria-hidden="true"></i>新文章</span></a>
                    </li>
                    <li v-bind:class="{'is-active': settingActive}">
                        <a  @click="activate('setting')"><span class="icon"><i class="fa fa-cog" aria-hidden="true"></i>设置</span></a>
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
