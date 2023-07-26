// useTimer.js
import { onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../store/game'

export default function useTimer() {
  const store = useGameStore()
  const { currentRound, intervalId, timeLeft } = storeToRefs(store)

  onMounted(() => {
    store.startNewRound()
  })

  onUnmounted(() => {
    clearInterval(intervalId.value)
  })

  return {
    currentRound,
    timeLeft
  }
}
