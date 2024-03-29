<script setup lang="ts">
const currentValue = ref('')
const options = ['Naruto', 'One Piece', 'Sasuke']

</script>
<template>
  <n-auto-complete
    v-model:value="currentValue"
    class="bg-backcolor"
    :input-props="{
      autocomplete: 'disabled'
    }"
    :options="options"
    placeholder="Search for anime or manga..."
    clearable
  >
    <template #prefix>
      <Icon name="oui:search" />
    </template>
  </n-auto-complete>
</template>
