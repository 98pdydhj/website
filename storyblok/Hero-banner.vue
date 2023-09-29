<template>
	<div
		v-editable="blok"
		class="flex w-full min-h-[70vh] md:h-[70vh] shadow-md"
		:style="{
			'background-color' : blok.bg_color.color || '#e3000f',
		}"
		:class="blok.direction == 'rtl' ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'"
	>
		<div class="flex justify-center item-center w-full h-[35vh] md:h-full md:w-1/2 p-5">
			<nuxt-img
				:src="blok.media.filename"
				:format="blok.media.filename.split('.').at(-1) == 'svg' ? 'svg' : 'webp'"
				fit="in"
				:modifiers="{ smart: true }"
				sizes="md:500px lg:600px xl:950px"
				class="hero-image w-full h-full filter-red md:rounded-lg"
			/>
		</div>
		<div
			class="flex flex-col justify-center item-center w-full h-min-[35vh] p-5 md:h-full md:w-1/2 text-center" 
			:style="{ color : blok.txt_color.color || '#000000'}"
			v-html="renderRichText(blok.text)"
		/>
	</div>
</template>

<script setup>
	const props = defineProps({ blok: Object });
</script>

<style>

	.hero-image {
		object-fit: cover;
	}
</style>