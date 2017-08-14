<template>
  <div>
        <section class="section">
            <div class="fluid-container">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <h2 class="title is-2" style="font-weight: 400">{{ $t('title') }}</h2>
                        <div class="content" v-html="content">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  computed: {
    content () {
      return this.$i18n.t('content')
    }
  },

  created () {
    this.$i18n.locale = this.$route.params.lang
  }
}
</script>

<i18n>
  {
    "en": {
      "title": "Privacy",
      "content": "<p>Wifriend respect and protect your privacy. We don't collect any information while your using of app and upload them to a server.</p><p>If you choose <a>configration setup</a> to add network, we will transfer the Wi-Fi network name and password to a server using HTTPS to make a digital-signed secure configuration file. We will not store this information. If you are not comfortable with our use of this information, you could choose <a>Wi-Fi setup</a>.</p>" 
    },
    "zh": {
      "title": "隐私策略",
      "content": "<p>Wifriend 尊重并保护您的隐私。我们不会<strong>收集</strong>您在使用中输入的任何信息并上传到服务器。</p><p>如果您选择通过<a>配置文件</a>来添加网络，我们会将您的Wi-Fi网络名称和密码通过HTTPS传送到服务器来生成签名的配置文件以保证安全。我们不会在服务器保存这些信息。如果您不愿意传送这些信息，您可以选择通过<a>系统Wi-Fi设置</a>来添加网络。</p>"
    }
  }
</i18n>
