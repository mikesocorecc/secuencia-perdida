<template>
  <div class="text-center">
    <p class="text-xl lg:text-3xl font-bold py-10 font-montserrat">
      Tiempo restante: {{ timeLeft }} segundos
    </p>
  </div>
</template>

<script setup>
import useTimer from '../composables/useTimer'

const { timeLeft } = useTimer()
</script>
