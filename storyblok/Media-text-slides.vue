<template>
	<div
		v-editable="blok"
		class="relative flex flex-col md:flex-row w-full min-h-[70vh] md:h-1 md:h-min-[50vh] md:p-5"
		:class="direction == 'rtl' ? 'md:flex-row-reverse' : 'md:flex-row'"
	>
		<div class="flex flex-row justify-center items-center w-full md:w-[45%] md:w-[47%] h-[35vh] md:h-full overflow-hidden card rounded-none md:rounded-lg p-0">
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
		<div class="absolute md:static flex flex-row justify-center
			items-center gap-1 md:flex-col md:w-[10%] lg:w-[7%]
			left-1/2 top-[70vh] center-axis-xy rounded-lg md:rounded-none md:ml-5 md:mr-5
		">
			<div
				v-editable="slide"
				class="p-3 card rounded-full"
				v-for="slide in slides"
				@click="setCurrentlySelectedSlide(slide)"
				:class="slide == currentlySelectedSlide ? 'shadow-xl' : 'shadow-md'"
			>
				<font-awesome-icon
					:icon="slide.icon.type + ' ' + slide.icon.icon"
					class="text-3xl md:text-6xl"
					:class="slide == currentlySelectedSlide ? '' : 'invert-icon'"
				/>
			</div>
		</div>
		<div class="w-full md:w-[45%] lg:w-[46%] min-h-[50%]  md:min-h-full card rounded-none md:rounded-lg">
			<div class="flex flex-col w-full min-h-full justify-start md:justify-center mt-[10%] md:mt-0 p-3 md:p-10" v-html="currentlyDisplayedText"></div>
		</div>
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
	}
</script>

<style lang="scss">
	.center-axis-xy {
		transform: translate(-50%,-37.5vh);

		@media (min-width: 768px) {
			transform: none;
		}
	}

	.invert-icon {
		filter: invert(14%) sepia(80%) saturate(3901%) hue-rotate(346deg) brightness(99%) contrast(122%);
	}
</style>