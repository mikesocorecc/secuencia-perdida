<template>
  <img
    v-if="isCorrect && number == null"
    src="../assets/check.svg"
    class="w-10 absolute -bottom-14 left-1/2 transform -translate-x-1/2"
    alt="check.svg"
  />
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  isCorrect: {
    type: Boolean
  },
  number: {
    type: Number
  }
})

const { isCorrect, number } = toRefs(props)
</script>
