<template>
  <div id="list">
    <ProductCard v-for="p in products" :product="p" @addProduct="onProductAdded(p.id)" />
    <!--Asi se imprime en pantalla un componente hijo llamado ProductCard y se le pasa el props asi :product="p"-->
    <CardItems :details="details" />
  </div>
</template>

<script lang="ts">
import ProductCard from './ProductCard.vue' //Se va a importar un componente hijo llamado ProductCard
import CardItems from './CardItems.vue' //Se va a importar un componente hijo llamado CardItems
import type { Product } from './types' //Se va a usar el tipo de dato Product con typeScript
import type { CartDetail } from './types' //Se va a usar el tipo de dato CartDetail con typeScript
export default {
  components: {
    ProductCard, //Forma de registrar componentes hijos con Options API
    CardItems,
  },
  data() {
    return {
      products: <Array<Product>>[
        //Se hace un casting <Array<Product>> Para indicar que es un tipo de dato Product con typeScript
        { name: 'silla', price: 56, id: 0 },
        { name: 'Monitor', price: 78, id: 1 },
        { name: 'Microfono', price: 85, id: 2 },
      ],
      details: <Array<CartDetail>>[],
    }
  },
  methods: {
    onProductAdded(productId: number) {
      const detaildFound = this.details.find((d) => d.productId === productId) //Con find buscamos en el array details si existe el productId que se va a agregar

      if (detaildFound) {
        detaildFound.quantity += 1
      } else {
        this.details.push({
          productId,
          quantity: 1,
        })
      }
    },
  },
}
</script>
