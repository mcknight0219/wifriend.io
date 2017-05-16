<template>
    <section class="section" style="padding-top: 0;">
        <div class="fluid-container">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <ul class="article-list">
                        <li>
                            <a href="">
                                <div class="article-title">Hello World <span class="tag is-light">草稿</span></div>
                                <div class="subtitle">
                                    <a href="" class="is-link" style="color: gray">编辑</a>
                                    <a href="" class="is-link" style="color: red; margin-left: 7px;">删除</a>
                                    <span class="pull-right">24 May 17</span>
                                </div>
                            </a>
                            <br />
                        </li>
                        <li>
                            <a href="">
                                <div class="article-title">2017 前端总结</div>
                                <div class="subtitle">
                                    <a href="" class="is-link" style="color: gray">编辑</a>
                                    <a href="" class="is-link" style="color: red; margin-left: 7px;">删除</a>
                                    <span class="pull-right">01 Apr 17</span>
                                </div>
                            </a>
                        </li>
                    </ul>   
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
    .article-list {
        list-style: none;
        li {
            padding: 15px 8px;

            .article-title {
                color: black;
                font-size: 1.25em;
                font-weight: 300;
            }

            .subtitle {
                margin-top: 5px;
                font-size: 1em;
            }
        }
        
    }
</style>
