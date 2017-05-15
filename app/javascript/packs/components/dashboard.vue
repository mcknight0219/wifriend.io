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
    <Editor v-if="tab === 'new'"></Editor>
</div>
</template>

<script>
import Editor from './dashboard/editor'

export default {
    components: {
        Editor
    },

    computed: {
        allActive () {
            return self.tab === 'all'
        },

        newActive () {
            return self.tab === 'new'
        },

        settingActive () {
            return self.tab === 'setting'
        }
    },

    data () {
        return {
            tab: 'new'
        }
    },

    methods: {
        activate (tab) {
            self.tab = tab
        }
    }
}
</script>

<style lang="scss">

</style>
