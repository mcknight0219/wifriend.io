<template>
    <section class="section">
        <div class="fluid-container">
            <div class="columns">
                <div class="column is-6 is-offset-3">
                     <div class="field">
                        <label class="label">Title</label>
                        <p class="control">
                            <input class="input" type="text" placeholder="牛逼的名字">
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
                    </nav>
                    <div class="editing-area">
                        <textarea placeholder="开始创作吧" v-on:dblclick="toggleMode">
                        </textarea>
                        <div class="field is-grouped">
                            <p class="control">
                                <button class="button is-primary">Submit</button>
                            </p>
                            <p class="control">
                                <button class="button is-link">Cancel</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props: {
    },

    data () {
        return {

        }
    },

    methods: {
        toggleMode () {
            console.log("Hello World")
        }
    }
}
</script>

<style lang="scss">
.editing-area {
    textarea {
        width: 100%;
        height: 450px;
        resize: none;
        font-size: 20px;
        padding: 0px 12px 0 12px;
        border: none;
        outline: none;
        box-shadow: none;
        caret-color: aqua;
    }
}

.level {
    bottom: 0px;
}
</style>
