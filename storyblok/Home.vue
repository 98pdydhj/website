<template>
	<div v-editable="blok" class="viewport-100-fix relative bg-slate-50 z-10" data-test="page">
		<div class="hidden md:block absolute w-full h-full pt-[95vh] md:pt-[100vh] overflow-hidden brightness-[92.5%] z-20">
			<nuxt-img
				v-if="blok.bg_type == 'image'"
				:src="blok.bg_img.filename"
				class="w-full h-full md:h-auto"
			/>
		</div>
		<div class="relative z-30">
			<StoryblokComponent
				v-for="blok in blok.body"
				:key="blok._uid"
				:blok="blok"
			/>
		</div>
</div>
</template>

<script setup>
	defineProps({ blok: Object });
</script>
