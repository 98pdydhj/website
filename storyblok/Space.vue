<template>
	<div v-editable="blok" class="w-full">
		<div class="w-full hidden md:block" :style="{
			height : blok.height + 'px',
			backgroundColor : blok.bg_color.color
		}" />
		<div class="w-full md:hidden" :style="{
			height : blok.mobile_height + 'px',
			backgroundColor : blok.bg_color.color
		}" />
	</div>
</template>


<script setup>
	const props = defineProps({ blok: Object });
</script>