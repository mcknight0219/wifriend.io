<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">关于</h2>
      <h4 class="title is-4">关于我</h4>
      <p>Qiang, 我是一个Web开发者，也是iOS开发爱好者。喜欢折腾技术，爱好读书，也偶尔打打乒乓球。</p>
      <br>
      <h4 class="title is-4">我的作品</h4>
      <ul class="project-list">
        <li>
          <span class="project-name"><a href="https://superunique.ca">superunique.ca</a></span>
           : 一个电商快递网站应用，具由完善的后台管理功能。我一人负责所有的开发以及运维。
        </li>
        <li>
          <span class="project-name"><a>Wifriend</a></span>
           : Wi-Fi 共享App。极大方便在主人为客人分享家里的Wi-Fi网络。
        </li>
        <li>
          <span class="project-name"><a href="https://github.com/mcknight0219/Yamp">Yamp</a></span>
           : 一个开源Swift Markdown parser。
        </li>
      </ul>
      <br>
      <h4 class="title is-4">联系我</h4>
      <ul class="contact-list">
        <li><span class="contact-item">Email:</span> mcknight0219{at}gmail.com</li>
        <li><span class="contact-item">Weibo:</span> mcknight0219</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
ul {
  &.project-list, &.contact-list {
    li {
      &:not(last-child)  {
        margin-bottom: 1.2em;
      }
    }
  }
}

.contact-item { font-weight: 500; }
</style>

<script>
export default {
}
</script>
