<template>
    <section class="section">
        <div class="fluid-container">
            <div class="columns">
                <div class="column is-6 is-offset-3">
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item">
                                <a class="button is-white is-focused">
                                    <i class="fa fa-indent" aria-hidden="true"></i>
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
                                <a class="button is-light">
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div class="editing-area">
                        <textarea placeholder="开始写作吧">
    
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
        padding: 15px 12px 0 12px;
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
