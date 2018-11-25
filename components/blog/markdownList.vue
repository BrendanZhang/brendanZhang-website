<template>
  <div class="markdownContainer">
    <div v-html="markdownContent" class="markdownInner"></div>
  </div>
</template>
<script>
import markdownContent from '~/source/posts/AJAX.md'
export default {
	computed: {
		markdownContent() {
			return markdownContent
		}
	}
}
</script>
<style lang="scss">
.router {
	justify-content: center;
	align-items: center;
	padding: 0 0 0 80px;
	main.inner-container {
		display: block;
		height: 100vh;
		overflow-x: auto;
		overflow-y: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
		.markdownContainer {
			width: 900px;
			.markdownInner {
				section {
					display: block;
					width: 100%;
					height: 100%;
					background: white;
				}
			}
		}
	}
}
</style>
