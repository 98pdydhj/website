<template>
	<div v-editable="blok" data-test="footer" class="w-full min-h-[50vh] flex flex-col justify-end">
		
		<div class="w-full min-h-[40vh]" :style="'background-color: ' + blok.bg_color.color || '#e3000f'">

		</div>
	</div>
</template>

<script setup>
	defineProps({ blok: Object });
</script>

<style lang="scss">
</style>