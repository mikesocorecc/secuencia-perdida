import { onBeforeUnmount } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../store/game'

export default function useGame() {
  const store = useGameStore()
  const { isFinished } = storeToRefs(store)

  onBeforeUnmount(() => {
    store.$reset()
  })

  return {
    isFinished
  }
}
