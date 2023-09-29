<template>
	<div v-editable="blok" class="viewport-100-fix relative" data-test="page">
		<div class="block md:block absolute lower-level w-full h-full pt-[95vh] md:pt-[100vh] overflow-hidden brightness-90">
			<nuxt-img
				v-if="blok.bg_type == 'image'"
				:src="blok.bg_img.filename"
				class="w-full h-full md:h-auto"
			/>
		</div>
		<div class="higher-level">
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

<style lang="scss">
	.higher-level{
		z-index: 1;
	}

	.lower-level {
		z-index: -1;
	}
</style>
