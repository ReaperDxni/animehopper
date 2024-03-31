<script setup lang="ts">
import { SearchBarLine, Icon } from '#components'
const currentValue = ref('')

const data = ['Naruto', 'One Piece', 'Solo Leveling']

const options = computed(() => {
  return data
    .filter(option => option.toLowerCase().includes(currentValue.value.toLowerCase()))
    .sort((a, b) => {
      const aLower = a.toLowerCase()
      const bLower = b.toLowerCase()
      const indexA = aLower.indexOf(currentValue.value.toLowerCase())
      const indexB = bLower.indexOf(currentValue.value.toLowerCase())

      if (indexA !== indexB) {
        return indexA - indexB
      }

      return aLower < bLower ? -1 : 1
    })
})

const renderLabel = (option: SelectOption) => {
  return [h(SearchBarLine, { label: option.label as string })]
}

</script>
<template>
  <n-auto-complete
    v-model:value="currentValue"
    class="bg-lightbackcolor"
    :input-props="{
      autocomplete: 'disabled'
    }"
    :options="options"
    :render-label="renderLabel"
    placeholder="Search for anime or manga..."
    clearable
  >
    <template #prefix>
      <Icon name="oui:search" />
    </template>
  </n-auto-complete>
</template>
