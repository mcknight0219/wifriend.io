<template>
    <section class="section">
        <div class="container">
            <div class="blog-list">
                <div class="columns">
                    <div class="column is-offset-2 is-2">
                        <div>
                            <span class="icon"><i class="fa fa-calendar" aria-hidden="true"></i></span> 17 May 17
                        </div>
                        <div style="margin-top: 7px;">
                            <span class="tag is-light">Javascript</span>
                            <span class="tag is-light">前端</span>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="blog-post-summary">
                            <router-link :to="{ name: 'post', params: { year: '2017', month: '01', day: '01', title: 'hello world' }}">
                                <h3 class="title is-3">Hello World</h3>
                            </router-link>
                            
                            <p style="margin-top: 13px;">哥十五年来每天长伞不离手，无论正常走路还是打着伞走都从来没有戳到过人或者伞尖碰到别人眼睛，可见修养之高[酷] 估计英国绅士们也有同感</p>
                             
                        </div>
                    </div>
                </div>
                 <div class="columns" style="margin-top: 23px;">
                    <div class="column is-offset-2 is-2">
                        <div>
                            <span class="icon"><i class="fa fa-calendar" aria-hidden="true"></i></span> 01 Apr 17
                        </div>
                        <div style="margin-top: 7px;">
                            <span class="tag is-light">Rails</span>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="blog-post-summary">
                            <h3 class="title is-3">Rails Routes Insideout</h3>
                            <p>哥十五年来每天长伞不离手，无论正常走路还是打着伞走都从来没有戳到过人或者伞尖碰到别人眼睛，可见修养之高[酷] 估计英国绅士们也有同感</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>

