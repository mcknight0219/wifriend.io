<template>
    <section class="section" style="padding-top: 0;">
        <div class="fluid-container">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <article class="message is-danger" v-if="hasError">
                        <div class="message-header">
                            <p>警告</p>
                            <button class="delete" @click="closeNotice"></button>
                        </div>
                        <div class="message-body">
                            {{ errorMessage }}
                        </div>
                    </article>
                    <article class="message is-success" v-if="publishStatus === 'success'">
                        <div class="message-header">
                            <p>发布成功</p>
                            <button class="delete" @click="closeNotice"></button>
                        </div>
                        <div class="message-body">
                            现在就去查看 
                            <router-link :to="{ name: 'post', params: { year: '2017', month: '01', day: '01', title: 'hello world' }}"></router-link>
                        </div>
                    </article>
                    <div class="field">
                        <p class="control">
                            <input class="input" type="text" placeholder="题目 - English title for friendly url" v-model="title">
                        </p>
                    </div>
                    <nav class="level is-mobile" style="margin-bottom: 0;">
                        <div class="level-left">
                            <div class="level-item">
                                <a class="button is-white" @click="togglePreview" v-bind:class="{ 'is-active': isPreview }">
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                </a>
                                <a class="button is-white" @click="replaceWithOl">
                                    <i class="fa fa-list-ol" aria-hidden="true"></i>
                                </a>
                                <a class="button is-white">
                                    <i class="fa fa-list-ul" aria-hidden="true"></i>
                                </a>
                                <a class="button is-white" @click="toggleQuote">
                                    <i class="fa fa-quote-left"></i>
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
                    <div id="editor" class="editor-wrapper" style="position: relative; overflow: hidden;">
                        <div v-bind:class="{ 'editor-preview-active': isPreview }" class="editor-preview CodeMirror" v-html="previewHtml">
                        </div>
                    </div>
                    <div class="field has-addons" style="margin-top: 15px;">
                        <p class="control">
                            <input class="input" type="text" placeholder="新的标签">
                        </p>
                        <p class="control is-expanded"><a class="button is-primary">添加</a></p>
                    </div>
                    <span class="tag is-light" v-for="tag in tags">{{ tag }} </span>
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
        value: {
            type: String,
            required: false
        }
    },

    data() {
        return {
            title: '',
            hasError: false,
            errorMessage: '',
            isPreview: false,
            previewHtml: '',
            tags: ['javascript', 'vue']
        }
    },

    computed: {
        publishStatus () {
            return this.$store.getters.publishStatus
        }
    },

    watch: {
        publishStatus (value) {
            if (this.publishStatus === 'success') {

            } else if (this.publishStatus === 'failure') {
                this.hasError = true
                this.errorMessage = '无法发布，请稍后重试。'
            }
        }
    },

    methods: {
        indexableTitle () {
            if (this.title.indexOf('-') < 0) {
                return ''
            }
            return this.title.split('-')[1].trim()
        },

        publish() {
            const text = this.editor.getValue()
            const title = this.title
            const tags = this.tags

            if (title.length === 0 || text.length === 0) {
                this.hasError = true
                this.errorMessage = '题目或文章内容不能为空'
                return
            }
            // Check the title, must contain indexable part
            let idx = title.indexOf('-')
            if (idx < 0 || idx === title.length) {
                this.hasError = true
                this.errorMessage = '题目必须包含 \'-\' '
            } 

            this.$store.dispatch('newPost', {title: title, content: text, tags: this.tags})
        },

        closeNotice() {
            this.hasError = false
        },

        // Replace current line with ordered list
        replaceWithOl() {
            const cm = this.editor
        },

        toggleQuote() {
            const cm = this.editor
            let cursor = cm.getCursor()
            const curLine = cm.getLine(cursor.line)
            cm.replaceRange("> " + curLine, { line: cursor.line, ch: 0 }, { line: cursor.line, ch: curLine.length })
            cm.focus()
        },

        togglePreview() {
            this.isPreview = !this.isPreview
            if (this.isPreview) {
                this.previewHtml = marked(this.editor.getValue())
            }
        },

        toggleFullscreen() {
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
            value: this.value,
            mode: 'markdown',
            theme: 'dracula',
            tabSize: '2',
            indentWithTabs: true,
            lineNumbers: true,
            lineWrapping: true,
            autofocus: true,
            extraKeys: {
                'Enter': 'newlineAndIndentContinueMarkdownList',
                'Tab': '',
                'Shift-Tab': ''
            }
        })
    }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/mixins";

@media screen and (max-width: 768px)  {
    .section {
        padding-left: 5px;
        padding-right: 5px;
    }
}

.editor-preview {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 100%;
    background: #f9f9f5;
    z-index: 9999;
    overflow: auto;
    transition: left 0.2s ease;
    font: 16px/1.62 "Helvetica Neue", "Xin Gothic", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif;
    color: #2c3e50;
}

.editor-preview-active {
    left: 0;
}

.editor-wrapper {
    h1,
    h2,
    h3,
    h4 {
        font-weight: bold;
    }
    h1 {
        font-size: 2em;
    }
    h2 {
        font-size: 1.5em;
    }
    h3 {
        font-size: 1.15em;
    }
    blockquote,
    ul,
    ol,
    li {
        -webkit-margin-before: 1em;
        -webkit-margin-after: 1em;
        -webkit-margin-start: 40px;
        -webkit-margin-end: 40px;
    }
}

.CodeMirror {
    height: 480px;
    font-family: "Helvetica Neue", "Xin Gothic", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif;
}
</style>