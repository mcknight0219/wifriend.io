<template>
  <section class="section">
    <div class="container">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <h2 class="title is-2">{{ $t('title') }}</h2>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item"><a class="button is-outlined is-inverted" @click="changeLocale">{{ localeStr }}</a></div>
        </div>
      </nav>
    
      <h4 class="title is-4">{{ $t('me') }}</h4>
      <p>{{ $t('about') }}</p>
      <br>
      <h4 class="title is-4">{{ $t('project') }}</h4>
      <ul class="project-list">
        <li>
          <span class="project-name"><a href="https://superunique.ca">superunique.ca</a></span>
           : {{ $t('superunique') }}
        </li>
        <li>
          <span class="project-name"><a>Wifriend</a></span>
           : {{ $t('wifriend') }}
        </li>
      </ul>
      <br>
      <h4 class="title is-4">{{ $t('contact') }}</h4>
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

<i18n>
  {
    "en": {
      "title": "About",
      "me": "Me",
      "project": "Projects",
      "contact": "Contact",
      "about": "Qiang, I like making website and also iOS apps. I enjoy technology, reading books, and also playing table tennis",
      "superunique": "A e-commerce site that provide solution for express carrier business. It includes a fully-functioned admin interface.",
      "wifriend": "Share your Wi-Fi with friends visiting your home with ease"
    },
    "zh": {
      "title": "关于",
      "me": "关于我",
      "project": "我的作品",
      "contact": "联系我",
      "about": "Qiang, 我是一个Web开发者，也是iOS开发爱好者。喜欢折腾技术，爱好读书，也偶尔打打乒乓球。",
      "superunique": "一个电商快递网站应用，具由完善的后台管理功能。我一人负责所有的开发以及运维。",
      "wifriend": "Wi-Fi 共享App。极大方便在主人为客人分享家里的Wi-Fi网络。"
    }
  }
</i18n>

<script>
export default {
  data() {
    return { 
      locale: 'zh'
    }
  },

  computed: {
    localeStr () {
      return this.locale === 'zh' ? 'En' : '简'
    }
  },

  watch: {
    locale (val) {
      this.$i18n.locale= val
    }   
  },

  methods: {
    changeLocale() {
      this.locale = this.locale === 'zh' ? 'en' : 'zh'
    }
  }
}
</script>
