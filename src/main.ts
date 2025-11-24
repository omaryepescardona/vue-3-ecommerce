import { createApp } from 'vue'
//import { createPinia } from 'pinia'

//import App from './App.vue'
//import ContadorOptions from './examples/ContadorOptions.vue'
//import ContadorComposition from './examples/ContadorComposition.vue'
import ListadoProductos from './examples/ProductList.vue'
//import router from './router'

const app = createApp(ListadoProductos)

//app.use(createPinia())
//app.use(router)

app.mount('#app')
