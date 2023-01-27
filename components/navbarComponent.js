import cartStore from "../store/cartStore.js";
const { mapState } = Pinia;
export default {
    template: `
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <span class="navbar-brand" href="#">香香餅乾店</span>
            <button type="button" class="btn nav-link">
                購物車
                <span class="badge rounded-pill bg-danger text-white">{{ cartList.carts.length }}</span>
            </button>
        </div>
    </nav>`,
    computed: {
        ...mapState(cartStore, ['cartList'])
    },
}