<template>
    <section class="section" style="padding-top: 0;">
        <div class="fluid-container">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <ul class="setting-list">
                        <li>
                            <span>编辑器夜间主题</span>
                            <span class="pull-right">
                                <vb-switch type="success" size="large" v-model="nightTheme"></vb-switch>
                            </span>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VbSwitch from 'vue-bulma-switch'

export default {
    components: {
        VbSwitch
    },

    data () {
        return {
            nightTheme: false
        }
    }
}
</script>

<style lang="scss">
    .setting-list {
        list-style: none;
        li {
            padding: 20px 8px;
            .setting-name {
                font-size: 1.15em;
            }

            .setting-action {

            }
        }
    }
</style>
