<template>
	<a :href="blok.link.url">
		<div
			v-editable="blok"
			data-test="footer-button-link"
			class="w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center color-red-600"
			:style="{backgroundColor: '#fff'}"
		>
			<nuxt-img
				v-if="blok.icon"
				:src="blok.icon.filename"
				:format="blok.icon.filename.split('.').at(-1) == 'svg' ? 'svg' : 'webp'"
				fit="in"
				:modifiers="{ smart: true }"
				sizes="md:50px lg:100px"
				class="object-contain w-2/3 h-2/3"
			/>
		</div>
	</a>
</template>

<script setup>
	const props = defineProps({ blok: Object });
</script>