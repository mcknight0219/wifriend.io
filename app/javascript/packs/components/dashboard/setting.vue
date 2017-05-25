<template>
    <section class="section" style="padding-top: 0;">
        <div class="fluid-container">
            <div class="columns">
                <div class="column is-6 is-offset-3">
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item">
                                <span>自动保存间隔</span>
                            </div>
                        </div>
                        <div class="level-right">
                            <div class="level-item">
                                <div class="field">
                                    <p class="control">
                                        <span class="select">
                                            <select v-model="saveInterval">
                                                <option value="30">30秒</option>
                                                <option value="45">45秒</option>
                                                <option value="60">1分钟</option>
                                            </select>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item">
                                <span>自动发布微博</span>
                            </div>
                        </div>
                        <div class="level-right">
                            <div class="level-item">
                                <a href="" class="button">
                                    <span class="icon">
                                        <i class="fa fa-weibo"></i>
                                    </span>
                                    <span>设置</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {
            nightTheme: false,
            saveInterval: '45'
        }
    }
}
</script>

<style lang="scss">

</style>
