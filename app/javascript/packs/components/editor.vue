<template>
    <div class="fluid-container">
        <div class="columns">
            <div class="column is-6 is-offset-3">
            <nav class="level is-mobile">
                <div class="level-left">
                    <div class="level-item">
                        <a class="button"><i class="fa fa-font" aria-hidden="true"></i></a>
                        <a class="button"><i class="fa fa-list" aria-hidden="true"></i></a>
                        <a class="button"><i class="fa fa-underline" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div class="level-right">
                </div>
            </nav>
            <div class="editing-area">
                <textarea placeholder="开始写作吧">

                </textarea>
            </div>
            </div>
        </div>
    </div>
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
        }
    }

    .level {
        bottom: 0px;
    }

</style>
