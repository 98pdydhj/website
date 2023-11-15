<template>
	<div
		v-editable="blok"
		class="relative grid grid-cols-1 grid-rows-8 md:grid-cols-11 md:ap-3 md:grid-rows-1 w-full h-[80vh] md:h-[60vh] md:p-5"
		:class="direction == 'rtl' ? 'md:flex-row-reverse' : 'md:flex-row'"
	>
		<div
			class="row-start-1 row-span-4 col-span-full md:row-span-full md:row-start-1 md:col-span-5 flex flex-row justify-center items-center w-full h-[40vh] md:h-full overflow-hidden card rounded-none md:rounded-lg p-0 shadow-none md:shadow-lg"
		>
			<nuxt-img
				:src="currentlySelectedSlide.media.filename"
				format="webp"
				fit="in"
				:modifiers="{ smart: true }"
				sizes="md:500px lg:600px xl:950px"
				class="object-cover w-full h-full"
				preload
			/>
		</div>
		<div class="row-start-5 col-span-full md:row-span-full md:row-start-1 md:col-start-6 md:col-span-1 flex flex-row justify-center
			items-center gap-1 md:flex-col h-[10%] w-full md:h-full
			rounded-lg md:rounded-none z-40
		">
			<div
				v-editable="slide"
				class="flex flex-col justify-center p-3 card w-[4rem] h-[4rem] xl:w-[6rem] xl:h-[6rem] rounded-full text-center"
				v-for="slide in slides"
				@click="setCurrentlySelectedSlide(slide)"
				:class="slide == currentlySelectedSlide ? 'shadow-xl' : 'shadow-md'"
			>
				<font-awesome-icon
					:icon="slide.icon.type + ' ' + slide.icon.icon"
					class="block text-4xl md:text-6xl"
					:class="slide == currentlySelectedSlide ? '' : 'invert-icon'"
				/>
			</div>
		</div>
		<div class="row-start-5 row-span-4 col-span-full md:row-span-full md:row-start-1 md:col-start-7 md:col-span-5 w-full h-[40vh] md:h-full card rounded-none md:rounded-lg overflow-scroll shadow-none md:shadow-lg">
			<div class="flex flex-col w-full min-h-full justify-center p-3 md:p-10" v-html="currentlyDisplayedText"></div>
		</div>
		<div class="row-start-5 row-span-4 col-span-full md:row-span-full md:row-start-1 md:col-start-7 md:col-span-5 w-full h-[40vh] md:h-full rounded-none md:rounded-lg text-fade" />
	</div>
</template>

<script setup>
	const props = defineProps({ blok: Object });
	const direction = props.blok.direction || "ltr";
	let currentlySelectedSlide;
	let slides = {};
	props.blok.slides.forEach((slide, i) => {
		if(i == 0)
			currentlySelectedSlide = ref(slide);
		slides[slide._uid] = slide;
	});

	const currentlyDisplayedText = computed(() =>
    	renderRichText(currentlySelectedSlide.value.text)
  	);

	const setCurrentlySelectedSlide = (slide) => {
		currentlySelectedSlide.value = slide;
		console.log(JSON.stringify(slide));
	}
</script>

<style lang="scss">
	.text-fade {
		background:linear-gradient(white 5%, transparent 15%, transparent 85%, white 95%);
		pointer-events: none;
	}

	.invert-icon {
		filter: invert(14%) sepia(80%) saturate(3901%) hue-rotate(346deg) brightness(99%) contrast(122%);
	}
</style>