<template>
	<div
		v-editable="blok"
		data-test="footer-card"
		class="footer-card card min-w-[80vw] min-h-[15vh] md:min-w-[25vw] md:min-h-[20vh] flex flex-col justify-center text-center"
		:style="{backgroundColor: '#fff'}"
		v-html="renderRichText(blok.card_text)"
	/>
</template>

<script setup>
	defineProps({ blok: Object });
</script>

<style lang="scss">
	.footer-card {
		img, svg, video, canvas, audio, iframe, embed, object {
			display: inline-block;
		}
	}
</style>