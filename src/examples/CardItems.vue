<template>
  <div id="card">
    <p>Productos Agregados al carrito:</p>
    <ul>
      <li v-for="detail in details">(id: {{ detail.productId }}) (Qty: {{ detail.quantity }})</li>
    </ul>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { CartDetail } from './types'
export default {
  props: {
    details: {
      type: Object as PropType<Array<CartDetail>>,
      required: true,
    },
  },
}
</script>
