<template>
	<a :href="blok.link.url">
		<span>{{blok.text}}</span><br class="md:hidden">
	</a>
</template>

<script setup>
	const props = defineProps({ blok: Object });
</script>