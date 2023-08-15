<template>
  <div class="">
    <h1 class="text-2xl lg:text-4xl font-semibold text-center pt-5 font-montserrat">
      Completa la secuencia
    </h1>
    <TransitionGroup name="list" tag="div" class="flex relative md:static items-center justify-center my-10">
      <template v-for="(number, index) in sequence" :key="index">
        <h2
          class="flex justify-center items-center text-5xl font-montserrat md:relative w-[60px] h-[60px] md:w-[115px] md:h-28 lg:w-[135px] lg:h-32 text-center md:text-7xl lg:text-8xl font-semibold text-[#2B4457]"
          :class="getMissingNumberClasses(number)" :style="{ transitionDuration: index * 0.1 + 's' }">
          <!-- {{ number ?? selectedOption }} -->
          <template v-if="number !== null">
            {{ number }}
          </template>
          <template v-else>
            {{ selectedOption }}
          </template>
          <OptionsValues v-if="number == null && !isShowingResult" :options="options" @select-option="selectOption" />
          <OptionCorrect :isCorrect="isCorrect" :number="number" @select-option="selectOption" />
          <OptionIncorrect :isCorrect="isCorrect" :number="number" :missingValue="missingValue"
            :isShowingResult="isShowingResult" @select-option="selectOption" />
        </h2>
        <img :style="{ transitionDuration: index * 0.1 + 's' }" v-if="index !== sequence.length - 1"
          class="grow-0 mx-2 w-6 md:w-14 lg:w-16 lg:mx-5" src="../assets/arrow_right.svg" alt="arrow_right.svg" />
      </template>
    </TransitionGroup>
    <div class="text-center mt-20">
      <button :disabled="isShowingResult"
        class="bg-[#495259] w-full md:w-2/4 lg:w-auto p-4 uppercase font-bold text-white rounded-2xl font-montserrat"
        @click="submit()">
        Responder
      </button>
    </div>
  </div>
</template>

<script setup>
import OptionsValues from './OptionsValues.vue'
import OptionCorrect from './OptionCorrect.vue'
import OptionIncorrect from './OptionIncorrect.vue'
import useSequence from '../composables/useSequence'

const {
  sequence,
  options,
  selectedOption,
  isCorrect,
  isShowingResult,
  missingValue,
  selectOption,
  submit,
  getMissingNumberClasses
} = useSequence()
</script>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  transform: translateX(-100%);
}

.list-leave-to {
  transform: translateX(0);
}
</style>
