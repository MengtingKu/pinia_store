import productStore from "../store/productStore.js";
import cartStore from "../store/cartStore.js";
const { mapState, mapActions } = Pinia;
export default {
    data() {
        return {}
    },
    template: `
    <div class="row row-cols-3 my-3 g-4">
        <div class="col" v-for="(product, index) in sortProduct" :key="product.id">
            <div class="card">
                <img :src="product.imageUrl" class="card-img-top" :alt="product.title" />
                <div class="card-body">
                    <h6 class="card-title fw-bolder h5 my-2">
                        {{ product.title }}
                        <span class="float-end">$ {{ product.price }}</span>
                    </h6>
                    <a href="#" class="btn btn-outline-primary w-100" @click.prevent="attToCart(product.id)">加入購物車</a>
                </div>
            </div>
        </div>
    </div>`,
    computed: {
        ...mapState(productStore, ['sortProduct'])
    },
    methods: {
        ...mapActions(cartStore, ['attToCart'])
    },
}