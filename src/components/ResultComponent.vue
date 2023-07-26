<template>
  <div class="flex items-center flex-col mt-10 pb-20 space-y-8">
    <div class="">
      <img src="../assets/check.svg" class=" " alt="arrow right logo" />
    </div>
    <p class="text-[#6A7680] text-3xl font-bold font-montserrat">DESEMPEÑO</p>
    <p class="text-8xl text-black font-bold font-montserrat">{{ result }}%</p>
    <RouterLink
      class="block font-montserrat bg-[#ED2A2F] py-5 font-bold px-16 text-white rounded-[40px]"
      to="/"
    >
      CONTINUAR
    </RouterLink>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import useResult from '../composables/useResult'

const { result, playSound } = useResult()

onMounted(() => {
  playSound()
})
</script>
