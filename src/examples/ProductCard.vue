<template>
  <div id="card">
    <!--Este es el componente hijo-->
    <p>Nombre: {{ product.name }}</p>
    <p>Precio: {{ product.price }}</p>
    <button @click="onAddButtonClick">Agregar al carrito</button>
    <hr />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue' //Se usara typeScript para el tipo de dato Product
import type { Product } from './types'
export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  }, //Se define un props que va a recibir un arreglo llamado product desde componente padre

  emits: ['addProduct'], //Definimos los eventos que se emiten

  methods: {
    onAddButtonClick() {
      //console.log('agregando producto ' + this.product.id);
      this.$emit('addProduct') //Emitimos un evento de componente hijo a componente padre
    },
  },
}
</script>
