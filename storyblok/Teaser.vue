<template>
  <h1
    v-editable="blok"
    :cat="$attrs.cat"
    class="py-8 text-6xl font-bold text-center"
    data-test="teaser"
  >
    {{ blok.headline }}
  </h1>
</template>

<script setup>
defineProps({ blok: Object });
</script>
