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
                    <nav class="level is-mobile" style="margin-bottom: 0;">
                        <div class="level-left">
                            <div class="level-item">
                                <a class="button is-white is-focused" @click="togglePreview">
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
                    <div id="editor" class="editor-wrapper" style="position: relative; overflow: hidden; height: 560px;">
                        <div v-bind:class="{ 'editor-preview-active': isPreview }" class="editor-preview CodeMirror" v-html="previewHtml">
                        </div>
                    </div>
    
                    <div class="field is-grouped" style="margin-top: 35px;">
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
var marked = require('marked')
import CodeMirror from 'codemirror'
import 'codemirror/mode/markdown/markdown'

export default {
    props: {
    },

    data() {
        return {
            title: '',
            hasError: false,
            isPreview: false,
            previewHtml: ''
        }
    },

    methods: {
        publish() {
            const text = this.editor.getValue()
            const title = this.title

            if (title.length === 0 || text.length === 0) {
                this.hasError = true
                return
            }
        },

        closeNotice() {
            this.hasError = false
        },

        togglePreview() {
            this.isPreview = !this.isPreview
            if (this.isPreview) {
                debugger
                this.previewHtml = marked(this.editor.getValue())
            }
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
            theme: 'dracula',
            tabSize: '2',
            indentWithTabs: true,
            lineNumbers: true,
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
.editor-preview {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 100%;
    background: #f9f9f5;
    z-index: 9999;
    overflow: auto;
    transition: left 0.2s ease
}

.editor-preview-active {
    left: 0;
}

.editor-wrapper {
    font: 16px/1.62 "Helvetica Neue", "Xin Gothic", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif;
    color: #2c3e50;

    h1, h2, h3, h4 {
        font-weight: bold;
    }
    h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.15em; }
}

.CodeMirror {
    height: 640px;
}
</style>
