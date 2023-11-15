<template>
	<div v-editable="blok" data-test="footer" class="w-full min-h-[55vh] md:min-h-[40vh] md:bg-transparent grid grid-cols-1 grid-rows-4">
		<div class="hidden md:block row-start-1 col-span-full" />
		<div class="w-full row-start-1 md:row-start-2 row-span-4 md:row-span-3 col-span-full" :style="'background-color: ' + blok.bg_color.color || '#e3000f'" />
		<div class="row-start-1 row-span-4 z-40 col-span-full pt-5 md:pt-0 flex flex-col gap-5">
			<div class="flex flex-col justify-center items-center md:flex-row gap-2 md:gap-5">
				<StoryblokComponent
					v-for="card in blok.cards"
					:key="card._uid"
					:blok="card"
				/>
			</div>
			<div class="flex flex-row justify-center items-center gap-2 md:gap-5">
				<StoryblokComponent
					v-for="buttonLink in blok.button_links"
					:key="buttonLink._uid"
					:blok="buttonLink"
				/>
			</div>
			<div class="flex flex-col md:flex-row justify-center items-center md:gap-2 mb-5">
				<StoryblokComponent
					v-for="textLink in blok.text_links"
					:key="textLink._uid"
					:blok="textLink"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps({ blok: Object });
</script>

<style lang="scss">
</style>