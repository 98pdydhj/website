<script setup>
const homeStory = await useStoryblok('home', { version: 'draft' });
</script>

<template>
	<StoryblokComponent v-if="homeStory" :blok="homeStory.content" />
</template>
