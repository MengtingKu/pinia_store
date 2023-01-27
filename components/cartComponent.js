import cartStore from "../store/cartStore.js";
const { mapState, mapActions } = Pinia;
export default {
    template: `
    <div class="bg-light p-4 my-4">
        <div v-if = "!cartList.carts.length">購物車沒有任何品項</div>
        <table class="table align-middle" v-else>
            <tbody v-for="(item, index) in cartList.carts" :key="item.id">
                <tr>
                    <td width="100">
                        <a aria-label="State" href="#" class="text-dark text-decoration-none" @click.prevent="removeItem(item.id)">x</a>
                    </td>
                    <td width="100">
                        <img :src="item.product.imageUrl"
                                        class="table-image" :alt="item.product.title" />
                    </td>
                    <td>{{ item.product.title }}</td>
                    <td width="200">
                        <select aria-label="State" name="" id="" class="form-select" :value="item.qty" @change="(e) => {cartQty(item.id, e)}">
                            <option :value="item" v-for="(item, index) in 20" :key="item">{{ item }}</option>
                        </select>
                    </td>
                    <td width="200" class="text-end">$ {{ item.subTotal }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
                </tr>
            </tfoot>
        </table>
    </div>`,
    computed: {
        ...mapState(cartStore, ['cartList'])
    },
    methods: {
        ...mapActions(cartStore, ['removeItem', 'cartQty'])
    },
}