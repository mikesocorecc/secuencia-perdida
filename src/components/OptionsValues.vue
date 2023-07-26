<template>
  <div
    class="animate-fadein opacity-0 duration-1000 absolute h-12 -bottom-14 left-2 right-2 md:-bottom-8 lg:-bottom-5 md:-left-3 md:-right-3 lg:-left-5 lg:-right-5 rounded-xl bg-[#91A9BC] shadow-options-values flex py-1 px-2 space-x-2"
  >
    <template v-for="(option, index) in options" :key="index">
      <button
        class="text-xl w-full text-[#2B4457] font-semibold bg-white rounded-[4.31px]"
        @click="$emit('selectOption', option)"
      >
        {{ option }}
      </button>
    </template>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  options: {
    type: Array
  },
  selectOption: {
    type: Function
  }
})

const { options } = toRefs(props)
</script>
