import { createApp } from 'vue'
//import { createPinia } from 'pinia'

//import App from './App.vue'
//import ContadorOptions from './examples/ContadorOptions.vue'
import ContadorComposition from './examples/ContadorComposition.vue'
//import router from './router'

const app = createApp(ContadorComposition)

//app.use(createPinia())
//app.use(router)

app.mount('#app')
