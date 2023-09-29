<template>
	<div v-editable="blok" class="block md:static w-full" :style="spaceStyle" />
</template>


<script setup>
	const props = defineProps({ blok: Object });
	const spaceStyle = {
		height : props.blok.height + "px",
		backgroundColor : props.blok.bg_color.color
	}
</script>