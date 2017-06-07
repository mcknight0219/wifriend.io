<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4  is-offset-4">
                    <div class="field">
                        <label class="label">输入管理员密码</label>
                        <p class="control">
                            <input type="password" class="input" v-model="password" v-on:keyup.enter="login" autofocus>
                        </p>
                        <p class="help is-danger" v-if="emptyPassword">密码不能为空</p>
                    </div>
                    <div class="field is-grouped">
                        <p class="control">
                            <button class="button is-primary" @click="login">登录</button>
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

    watch: {
        isLoggedIn (val) {
            if (val) { // redirect
                this.$router.push('dashboard')    
            }
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
    },

    created () {
        if (this.isLoggedIn) {
            this.$store.dispatch('logout')
            this.$router.push('home')
        }
    }
}
</script>
