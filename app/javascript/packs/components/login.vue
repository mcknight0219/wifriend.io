<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4  is-offset-4">
                    <article class="message is-info" v-if="isInCognitive">
                        <div class="message-header">
                            <p>Info</p>
                        </div>
                        <div class="message-body">
                           在Incognitive模式下无法登录，请切换到普通浏览器模式来登录
                        </div>
                    </article>
                    <div class="field">
                        <label class="label">输入管理员密码</label>
                        <p class="control">
                            <input type="password" class="input" v-model="password" v-on:keyup.enter="login" autofocus>
                        </p>
                        <p class="help is-danger" v-if="emptyPassword">密码不能为空</p>
                    </div>
                    <div class="field is-grouped">
                        <p class="control">
                            <button class="button is-primary" @click="login" v-bind:disabled="isInCognitive">登录</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            password: '',
            emptyPassword: false,
            isInCognitive: false
        }
    },

    computed: {
        isLoggedIn() {
            return this.$store.getters.login
        }
    },

    watch: {
        isLoggedIn(val) {
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

    created() {
        const fs = window.RequestFileSystem || window.webkitRequestFileSystem
        fs(window.TEMPORARY, 100, () => {
            this.isInCognitive = false
        }, () => {
            this.isInCognitive = true
        })
        
        if (this.isLoggedIn) {
            this.$store.dispatch('logout')
            this.$router.push('home')
        }
    }
}
</script>
