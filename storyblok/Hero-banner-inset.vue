<template>
	<div
		v-editable="blok"
		class="flex w-full h-[50vh] md:h-[50vh] overflow-hidden shadow-md"
		:style="{
			'background-color' : blok.bg_color.color || '#e3000f',
		}"
	>
		<div
			class="relative grid w-full hero-image-inset-parent"
		>
			<div class="overflow-hidden hero-image-inset-childs w-full h-full">
				<nuxt-img
					v-if="blok.media"
					:src="blok.media.filename"
					:format="blok.media.filename.split('.').at(-1) == 'svg' ? 'svg' : 'webp'"
					fit="in"
					:modifiers="{ smart: true }"
					sizes="md:600px lg:800px xl:1100px"
					class="object-cover w-full h-full"
					:class="blok.bg_grayscale ? 'grayscale' : ''"
				/>
			</div>
			<div
				class="hero-image-inset-cover hero-image-inset-childs flex flex-col justify-center item-center text-center p-5"
				:style="{
					backgroundColor : 'rgba(' + rgbOfBg.r + ',' + rgbOfBg.g + ',' + rgbOfBg.b + ',' + blok.bg_opacity / 100 + ')',
					color : blok.txt_color.color || '#000000'
				}"
				v-html="renderRichText(blok.text)"
			/>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({ blok: Object });

	const hexToRgb = (h) => {
		let r = 0, g = 0, b = 0;

		if (h.length == 4) {
			r = "0x" + h[1] + h[1];
			g = "0x" + h[2] + h[2];
			b = "0x" + h[3] + h[3];

		} else if (h.length == 7) {
			r = "0x" + h[1] + h[2];
			g = "0x" + h[3] + h[4];
			b = "0x" + h[5] + h[6];
		}

		return { r : +r, g : +g, b : +b};
	}

	const rgbOfBg = computed(() => {
		return hexToRgb(props.blok.bg_color.color);
	})
</script>

<style>

	.hero-image-inset-childs {
		grid-column: 1;
		grid-row: 1;
	}

	.hero-image-inset-cover {
		z-index: 2;
	}
</style>