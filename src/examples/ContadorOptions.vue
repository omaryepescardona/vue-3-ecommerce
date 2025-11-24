<template>
  <div id="Inicio">
    <p>Objetivo tienes que llegar a 20 clicks</p>
    <h1>Contador: {{ count }}</h1>
    <h1>{{ msg }}</h1>
  </div>
  <button @click="increase">aumentar contador</button>
  <button @click="decrease">disminuir contador</button>
  <!--Las funciones no llevan parentesis cuando se llaman desde el template-->
  <p v-if="count <= 10">Vamos tu puedes!</p>
  <p v-else>Ya falta muy poco...</p>
</template>

<script lang="ts">
//Usando Option Api
export default {
  data() {
    //Aca en data definimos el estado de nuestro componente
    return {
      count: 0,
      msg: '',
    }
  },

  methods: {
    increase() {
      //Asociar eventos en methods
      this.count += 1
      this.msg = 'Aumentado contador'
    },
    decrease() {
      if (this.count > 0) {
        this.count -= 1
      } else {
        this.msg = 'Error el contador aun no se ha inicializado'
      }
    },
  },

  mounted() {
    console.log('El valor inicial del contador es ' + this.count)
  },
}
</script>
