<template>
  <div>
    <markdown-it-vue class="md-body" :content="content"/>
  </div>
</template>
<script>
import MarkdownItVue from 'markdown-it-vue/dist/markdown-it-vue.mini.js'

export default {
	components: {
		MarkdownItVue
	},
	data() {
		return {
      content: '# markdowntest'
		}
	}
}
</script>
