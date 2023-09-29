<template>
	<div
		v-editable="blok"
		class="sticky top-0 z-[999] flex flex-col md:flex-row justify-center content-center md:justify-start min-h-[10vh] md:h-[12.5vh] lg:h-[10vh] w-full shadow-md"
		:style="{
			backgroundColor : blok.bg_color.color || '#e3000f',
			color : blok.text_color.color || '#ffffff'
		}"
	>
		<div class="flex justify-center content-center w-full md:w-1/5 lg:w-1/6 h-16 md:h-full p-3 md:p-4 mb-5">
			<nuxt-img
				v-if="blok.logo.filename"
				:src="blok.logo.filename"
				class="logo"
				preload
			/>
		</div>
		<div class="text-inherit md:hidden">
			<div
				class="flex justify-center content-center h-10"
				@click="toggleShowMenu"
			>
				<font-awesome-icon
					icon="bars"
					size="lg"
				/>
			</div>
			<div v-show="showMenu">
				<StoryblokComponent
					v-for="link in blok.links"
					:key="link._uid"
					:blok="link"
					:for_mobile="true"
				/>
			</div>
		</div>
		<div class="text-inherit hidden md:flex justify-end w-4/5 lg:w-5/6">
			<StoryblokComponent
				v-for="link in blok.links"
				:key="link._uid"
				:blok="link"
				:for_mobile="false"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			blok: { required: true, type: Object},
		},
		methods: {
			toggleShowMenu () {
				this.showMenu = !this.showMenu;
			}
		},
		data () {
			return {
				showMenu: false
			}
		},
	}
</script>

<style lang="scss">
	.logo {
		object-fit: contain;
		max-width: 100%;
		max-height: 100%;
	}
</style>