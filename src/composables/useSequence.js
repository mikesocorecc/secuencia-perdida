import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../store/game'

export default function useGameLogic() {
  const store = useGameStore()
  const { sequence, missingValue, options } = storeToRefs(store)

  const selectedOption = ref(null)
  const isCorrect = ref(false)
  const isShowingResult = ref(false)

  // Selects an option
  const selectOption = (option) => {
    selectedOption.value = option
  }

  // Submits the user's answer
  const submit = () => {
    if (selectedOption.value !== null) {
      isShowingResult.value = true
      isCorrect.value = missingValue.value === selectedOption.value
      store.stopTimer()
      store.playSound(isCorrect.value)
      setTimeout(() => {
        store.handleSubmit(isCorrect.value)
        selectedOption.value = null
        isShowingResult.value = false
        isCorrect.value = false
      }, 1000)
    }
  }

  // Computes the classes for the missing number element
  const getMissingNumberClasses = (number) => {
    if (number === null && !isShowingResult.value) {
      return 'rounded-[10px] lg:rounded-[20px] border-2 border-dashed border-[#A4A4A4]   shadow-rectanlge'
    } else if (isCorrect.value && number === null) {
      return 'rounded-[10px] lg:rounded-[20px] border-4 border-solid border-[#52E1C9]   shadow-success'
    } else if (!isCorrect.value && number === null && isShowingResult.value) {
      return 'rounded-[10px] lg:rounded-[20px] border-4 border-solid border-[#FF7C80]   shadow-error'
    } else {
      return ''
    }
  }

  return {
    sequence,
    options,
    selectedOption,
    isCorrect,
    isShowingResult,
    missingValue,

    selectOption,
    submit,
    getMissingNumberClasses
  }
}
