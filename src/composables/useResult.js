import { storeToRefs } from 'pinia'
import { useGameStore } from '../store/game'
import finishSound from '../assets/finish.wav'

export default function useResult() {
  const store = useGameStore()
  const { result } = storeToRefs(store)

  const playSound = () => {
    const audio = new Audio(finishSound)
    audio.play()
  }

  return {
    result,
    playSound
  }
}
