<template>
	<div v-editable="blok" data-test="landing" class="w-full h-[85vh] md:h-[90vh]" :style="'background-color: ' + blok.bg_color.color || '#ffffff'">
		<div class="flex flex-col md:flex-row w-full h-full">
			<div class="flex flex-col content-bottom min-h-[65%] w-full md:h-full md:w-1/2 px-5 pt-5">
				<nuxt-img
					:src="blok.showcase.filename"
					format="webp"
					fit="in"
					:modifiers="{ smart: true }"
					sizes="md:500px lg:600px xl:950px"
					class="landing-image my-auto md:mb-0"
					preload
				/>
			</div>
			<div class="block xl:hidden landing-divider" />
			<div class="flex flex-col justify-center w-full md:w-1/2 md:h-full">
				<h1 class="text-6xl md:text-7xl lg:text-8xl text-center md:text-left mx-5 my-2 uppercase">{{ blok.title }}</h1>
				<h2 v-if="blok.subtitle" class="text-2xl md:text-3xl lg:text-4xl text-center md:text-left mb-5 mx-5">{{ blok.subtitle }}</h2>
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps({ blok: Object });
</script>

<style lang="scss">
	.landing-divider {
		height: 0.1rem;
		background: linear-gradient(90deg, #ffffff00 0%, #ffffff00 2.5%, #000000ff 20%, #000000ff 80%, #ffffff00 97.5%, #ffffff00 100%);;
	}

	.landing-image {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
</style>