import NavbarComponent from "./components/navbarComponent.js";
import CartComponent from "./components/cartComponent.js";
import ProductComponent from "./components/productComponent.js";
const { createPinia } = Pinia;
const app = Vue.createApp({
    components: {
        NavbarComponent,
        CartComponent,
        ProductComponent
    }
})
const pinia = createPinia();
app.use(pinia);
app.mount('#app');
