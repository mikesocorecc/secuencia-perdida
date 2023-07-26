<template>
  <p
    v-if="!isCorrect && number == null && isShowingResult"
    class="absolute -bottom-11 md:-bottom-16 lg:-bottom-[4.5rem] left-0 right-0 text-[#B60006] text-center font-semibold text-xl md:text-base lg:text-lg transition-opacity font-montserrat"
  >
    La respuesta correcta es {{ missingValue }}
  </p>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  isCorrect: {
    type: Boolean
  },
  isShowingResult: {
    type: Boolean
  },
  number: {
    type: Number
  },
  missingValue: {
    type: Number
  }
})

const { isCorrect, number, missingValue, isShowingResult } = toRefs(props)
</script>
