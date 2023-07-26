<template>
  <div class="h-screen bg-gray-300 flex items-center">
    <div class="container">
      <div class="h-auto bg-white border-4 rounded-lg shadow-2xl">
        <ProgressComponent />
        <div class="xl:px-32">
          <SequenceComponent v-if="!isFinished" />

          <ResultComponent v-else />

          <TimerComponent v-if="!isFinished" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProgressComponent from '../components/ProgressComponent.vue'
import ResultComponent from '../components/ResultComponent.vue'
import SequenceComponent from '../components/SequenceComponent.vue'
import TimerComponent from '../components/TimerComponent.vue'
import useGame from '../composables/useGame'

const { isFinished } = useGame()
</script>
