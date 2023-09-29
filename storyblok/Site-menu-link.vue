<template>
	<nuxt-link
		v-if="for_mobile"
		:to="blok.link_target.url"
	>
		<div
			v-editable="blok"
			class="grid h-12 text-inherit"
			:class="iconPresent && linkTextPresent ? 'grid-cols-2' : 'grid-cols-1'"
		>
			<div
				v-if="iconPresent && iconPosition == 'left'"
				class="flex flex-row items-center mx-1"
				:class="linkTextPresent ? 'justify-end' : 'justify-center'"
			>
				<font-awesome-icon
					:icon="blok.icon.type + ' ' + blok.icon.icon"
					size="lg"
				/>
			</div>
			<div
				class="flex items-center flex-row mx-1"
				:class="iconPresent ? iconPosition == 'left' ? 'justify-start' : 'justify-end' : 'justify-center'"
			>
				<b>{{ blok.link_text }}</b>
			</div>
			<div
				v-if="iconPresent && iconPosition == 'right'"
				class="flex items-center flex-row justify-start mx-1"
			>
				<font-awesome-icon
					:icon="blok.icon.type + ' ' + blok.icon.icon"
					size="lg"
				/>
			</div>
		</div>
	</nuxt-link>
	<nuxt-link
		v-if="!for_mobile"
		:to="blok.link_target.url"
	>
		<div
			v-editable="blok"
			class="flex flex-row items-center h-full w-auto text-inherit p-5"
		>
			<div
				v-if="iconPresent && iconPosition == 'left'"
				class="mr-2"
			>
				<font-awesome-icon
					:icon="blok.icon.type + ' ' + blok.icon.icon"
					size="lg"
				/>
			</div>
			<div>
				<b>{{ blok.link_text }}</b>
			</div>
			<div
				v-if="iconPresent && iconPosition == 'right'"
				class="ml-2"
			>
				<font-awesome-icon
					:icon="blok.icon.type + ' ' + blok.icon.icon"
					size="lg"
				/>
			</div>
		</div>
	</nuxt-link>
</template>

<script setup>
	const props = defineProps({ blok: Object, for_mobile : Boolean });
	const linkTextPresent = typeof props.blok.link_text == "string" && props.blok.link_text != "";
	const iconPresent = typeof props.blok.icon == "object" && props.blok.icon.icon != "";
	const iconPosition = props.blok.icon_position || "left";
</script>