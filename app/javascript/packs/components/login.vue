<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4  is-offset-4">
                    <article class="message is-danger" v-if="!isLoggedIn">
                        <div class="message-body">
                            登录密码错误    
                        </div>
                    </article>
                    <div class="field">
                        <label class="label">输入管理员密码</label>
                        <p class="control">
                            <input type="password" class="input" v-model="password" required>
                        </p>
                        <p class="help is-danger" v-if="emptyPassword">密码不能为空</p>
                    </div>
                    <div class="field is-grouped">
                        <p class="control">
                            <button class="button is-primary" @click="login">登录</button>
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
            password: '',
            emptyPassword: false
        }
    },

    computed: {
        isLoggedIn () {
            return this.$store.getters.login
        }
    },

    methods: {
        login() {
           if (this.password.length === 0) {
               this.emptyPassword = true
               return
           }
        
           this.$store.dispatch('login', this.password)
        }
    }
}
</script>
