import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
// import VueRouter from 'vue-router'

// createApp.use(VueRouter)

// createApp.filter('showData', val =>{
//     if(!val || typeof(val) != 'string') return ''
//     val = val.slice(0, 100)
//     return val
// })

let app = createApp(App);

app.use(router).mount("#app");
