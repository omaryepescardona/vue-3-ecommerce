<template>
  <p>Hola soy la version con Compositions Api</p>
  <h1>Contador: {{ count }}</h1>
  <button @click="increment">Incrementar contador</button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue' //En composition Api las variables de estado reactivas se definen usando ref
const count = ref(0)

function increment() {
  //En composition api se define directamente la funcion
  count.value += 1
}

onMounted(() => {
  //Los hooks se definen directamente
  console.log('El valor inicial del contador es ' + count.value)
})
</script>
