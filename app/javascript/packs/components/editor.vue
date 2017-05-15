<template>
    <section class="section">
        <div class="fluid-container">
            <div class="columns">
                <div class="column is-6 is-offset-3">
                    <article class="message is-danger" v-if="hasError">
                        <div class="message-header">
                            <p>Warning</p>
                            <button class="delete" @click="closeNotice"></button>
                        </div>
                        <div class="message-body">
                            题目或文章内容不能为空    
                        </div>
                    </article>
                    <div class="field">
                        <label class="label">Title</label>
                        <p class="control">
                            <input class="input" type="text" placeholder="牛逼的名字" v-model="title">
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item">
                                <a class="button is-white is-focused">
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                </a>
                                <a class="button is-white">
                                    <i class="fa fa-bold" aria-hidden="true"></i>
                                </a>
                                <a class="button is-white">
                                    <i class="fa fa-italic" aria-hidden="true"></i>
                                </a>
                                <a class="button is-white">
                                    <i class="fa fa-underline" aria-hidden="true"></i>
                                </a>
                                <a class="button is-white">
                                    <i class="fa fa-list-ol" aria-hidden="true"></i>
                                </a>
                                <a class="button is-white">
                                    <i class="fa fa-list-ul" aria-hidden="true"></i>
                                </a>
                                <a class="button is-white">
                                    <i class="fa fa-code" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div class="level-right">
                            <div class="level-item">
                                <a class="button is-white" @click="toggleFullscreen">
                                    <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div id="editor"></div>
                    <div class="field is-grouped">
                        <p class="control">
                            <button class="button is-primary" @click="publish">发布</button>
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
import CodeMirror from 'codemirror'
import 'codemirror/mode/markdown/markdown'

export default {
    props: {
    },

    data() {
        return {
            title: '',
            hasError: false
        }
    },

    methods: {
        publish () {
            const text = this.editor.getValue()
            const title = this.title

            if (title.length === 0 || text.length === 0) {
                this.hasError = true
                return
            }
        },

        closeNotice () {
            this.hasError = false
        },

        toggleFullscreen() {
            debugger
            const el = document.getElementById("editor")
            const isFull = document.isFull || document.mozFullScreen || document.webkitIsFullScreen

            const requestFull = () => {
                if (el.requestFullScreen) {
                    el.requestFullScreen()
                } else if (el.mozRequestFullScreen) {
                    el.mozRequestFullScreen()
                } else if (el.webkitRequestFullScreen) {
                    el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                }
            }

            const cancel = () => {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen()
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                }
            }

            isFull ? cancel() : requestFull()
        }
    },

    mounted() {
        this.editor = CodeMirror(document.getElementById("editor"), {
            mode: 'markdown',
            theme: 'paper',
            tabSize: '2',
            indentWithTabs: true,
            lineNumbers: false,
            autofocus: true,
            extraKeys: {
                'Enter': '',
                'Tab': '',
                'Shift-Tab': ''
            }
        })
    }
}
</script>

<style lang="scss">

</style>
