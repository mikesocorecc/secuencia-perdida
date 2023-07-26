import { storeToRefs } from 'pinia'
import { useGameStore } from '../store/game'

export default function useProgress() {
  const store = useGameStore()
  const { progress } = storeToRefs(store)

  return {
    progress
  }
}
