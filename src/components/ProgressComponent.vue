<template>
  <div class="flex items-center">
    <div class="w-full">
      <div
        class="bg-gradient-to-r h-5 from-[#FF8001] to-[#FFCC0D] text-xs leading-none py-1 text-center text-white rounded-r-full transition-all ease-in-out duration-500"
        :style="{
          width: progress === 0 ? '4px' : progress + '%'
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import useProgress from '../composables/useProgress'

const { progress } = useProgress()
</script>
