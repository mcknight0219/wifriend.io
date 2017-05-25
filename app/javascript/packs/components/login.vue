<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4  is-offset-4">
                    <article class="message is-warning" v-if="notice">
                        <div class="message-header">
                            <p>Warning</p>
                            <button class="delete" @click="closeNotice"></button>
                        </div>
                        <div class="message-body">
                            这里只是一个博客写作和发布后台。Don't peek
                        </div>
                    </article>
                    <article class="message is-danger">
                        
                        <div class="message-body">
                            登录密码错误    
                        </div>
                    </article>
                    <div class="field">
                        <label class="label">输入管理员密码</label>
                        <p class="control">
                            <input type="password" class="input">
                        </p>
                    </div>
                    <div class="field is-grouped">
                        <p class="control">
                            <button class="button is-primary">登录</button>
                        </p>
                        <p class="control">
                            <button class="button is-link">取消</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            notice: true
        }
    },

    methods: {
        closeNotice () {
            this.notice = false
        }
    }
}
</script>
