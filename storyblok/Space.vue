<template>
	<div v-editable="blok" class="hidden md:block md:static w-full" :style="{
		height : blok.height + 'px',
		backgroundColor : blok.bg_color.color
	}" />
</template>


<script setup>
	const props = defineProps({ blok: Object });
</script>