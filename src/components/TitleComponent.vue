<template>
  <div>
    <h1 class="uppercase text-white text-4xl lg:text-7xl font-black text-center font-mali">
      {{ animatedText }}
    </h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import TWEEN from '@tweenjs/tween.js'
import _ from 'lodash'

export default {
  setup() {
    const text = 'Secuencia Perdida'
    const animatedText = ref('')
    let index = 0
    let reverse = false

    const animateText = () => {
      // Si la animación está avanzando y aún no ha llegado al final del texto
      if (!reverse && index < text.length) {
        // Crea un nuevo objeto Tween para animar el valor del índice
        new TWEEN.Tween({ index })
          // Anima el valor del índice hasta el siguiente valor en un período de 100 milisegundos
          .to({ index: index + 1 }, 100)
          // En cada cuadro de la animación, actualiza el valor de la referencia reactiva `animatedText`
          .onUpdate((obj) => {
            animatedText.value = text.slice(0, _.round(obj.index))
          })
          // Inicia la animación Tween
          .start()
        // Incrementa el valor del índice en uno para avanzar a la siguiente posición en el texto
        index++
      }
      // Si la animación está retrocediendo y aún no ha llegado al principio del texto
      else if (reverse && index > 0) {
        // Crea un nuevo objeto Tween para animar el valor del índice
        new TWEEN.Tween({ index })
          // Anima el valor del índice hasta el valor anterior en un período de 100 milisegundos
          .to({ index: index - 1 }, 100)
          // En cada cuadro de la animación, actualiza el valor de la referencia reactiva `animatedText`
          .onUpdate((obj) => {
            animatedText.value = text.slice(0, _.round(obj.index))
          })
          // Inicia la animación Tween
          .start()
        // Decrementa el valor del índice en uno para retroceder a la posición anterior en el texto
        index--
      }
      // Si la animación ha llegado al final o al principio del texto
      else {
        // Invierte el valor de la variable `reverse` para cambiar la dirección de la animación
        reverse = !reverse
      }
      // Después de un retraso de 200 milisegundos, llama al método `animateText` nuevamente para continuar con la animación
      setTimeout(() => {
        animateText()
      }, 200)
    }

    onMounted(() => {
      animateText()
      update()
    })

    const update = () => {
      requestAnimationFrame(update)
      TWEEN.update()
    }

    return { animatedText }
  }
}
</script>
