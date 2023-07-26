import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import _ from 'lodash'
import correctSound from '../assets/correct.wav'
import incorrectSound from '../assets/error.wav'

export const useGameStore = defineStore('game', () => {
  // Constants
  const NUM_OPTIONS = 3
  const MAX_OPTION_VALUE = 9
  const TIME_LIMIT = 10

  const correctAudio = new Audio(correctSound)
  const incorrectAudio = new Audio(incorrectSound)

  // State properties
  const totalRounds = ref(5)
  const sequenceLength = ref(4)
  const minStartValue = ref(1)
  const maxStartValue = ref(1)
  const currentRound = ref(-1)
  const correctAnswers = ref(0)
  const currentSequence = ref(null)
  const options = ref(null)
  const sequence = ref(null)
  const missingIndex = ref(null)
  const missingValue = ref(null)
  const intervalId = ref(null)
  const timeLeft = ref(TIME_LIMIT)

  // Getters
  const isFinished = computed(() => currentRound.value == totalRounds.value)
  const result = computed(() => (correctAnswers.value / totalRounds.value) * 100)
  const progress = computed(() => (currentRound.value / totalRounds.value) * 100)

  // Actions
  const $reset = () => {
    correctAnswers.value = 0
    options.value = null
    sequence.value = null
    missingIndex.value = null
    missingValue.value = null
    currentRound.value = -1
  }
  // Generates a new sequence with a missing value
  const generateSequence = () => {
    const start = _.random(minStartValue.value, maxStartValue.value)
    const sequenceData = _.range(start, start + sequenceLength.value)
    const missingIndexData = _.random(0, sequenceLength.value - 1)
    const missingValueData = sequenceData[missingIndexData]
    sequenceData[missingIndexData] = null
    sequence.value = sequenceData
    missingIndex.value = missingIndexData
    missingValue.value = missingValueData
  }

  const generateOptions = () => {
    const optionsData = _.sampleSize(_.range(1, MAX_OPTION_VALUE + 1), NUM_OPTIONS - 1)
    optionsData.push(missingValue.value)
    options.value = _.shuffle(optionsData)
  }

  // Starts a new round by generating a new sequence and new options
  const startNewRound = () => {
    if (!isFinished.value) {
      currentRound.value++
      timeLeft.value = TIME_LIMIT
      generateSequence()
      generateOptions()
      startInterval()
    } else {
      clearInterval(intervalId.value)
    }
  }

  const stopTimer = () => {
    clearInterval(intervalId.value)
  }

  const playSound = (correct) => {
    if (correct) {
      correctAudio.play()
    } else {
      incorrectAudio.play()
    }
    setTimeout(() => {
      correctAudio.pause()
      correctAudio.currentTime = 0
      incorrectAudio.pause()
      incorrectAudio.currentTime = 0
    }, 5000)
  }

  // Handles the user's answer submission
  const handleSubmit = (isCorrect) => {
    if (isCorrect) {
      correctAnswers.value++
    }
    startNewRound()
  }

  // Handles the timeout event
  const handleTimeout = () => {
    if (!isFinished.value) {
      startNewRound()
    }
  }

  // Starts the interval for the countdown timer and starts a new round
  const startInterval = () => {
    clearInterval(intervalId.value)
    intervalId.value = setInterval(() => {
      timeLeft.value--
      if (timeLeft.value === 0) {
        handleTimeout()
        incorrectAudio.play()
        setTimeout(() => {
          incorrectAudio.pause()
          incorrectAudio.currentTime = 0
        }, 4000)
        timeLeft.value = TIME_LIMIT
      }
    }, 1000)
  }

  return {
    // State properties
    totalRounds,
    sequenceLength,
    minStartValue,
    maxStartValue,
    currentRound,
    correctAnswers,
    currentSequence,
    options,
    sequence,
    missingIndex,
    missingValue,
    timeLeft, //Nuevos agregado
    intervalId,

    // Getters
    isFinished,
    result,
    progress,

    // Actions
    generateSequence,
    generateOptions,
    handleSubmit,
    handleTimeout,
    startInterval,
    startNewRound,
    stopTimer,
    $reset,
    playSound
  }
})
