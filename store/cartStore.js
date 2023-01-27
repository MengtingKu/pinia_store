const { defineStore } = Pinia;
import productStore from "./productStore.js";
export default defineStore('cart', {
    state: () => ({
        cartOrders: []
    }),
    actions: {
        attToCart(productId, qty = 1) {
            const cartStatus = this.cartOrders.find((item) => item.productId === productId);
            if (cartStatus) {
                cartStatus.qty += qty
            } else {
                this.cartOrders.push({
                    id: new Date().getTime(),
                    productId,
                    qty
                })
            }
        },
        removeItem(id) {
            const index = this.cartOrders.findIndex((item) => item.productId === id);
            this.cartOrders.splice(index, 1)
        },
        cartQty(id, e) {
            // console.log(id);
            const cartStatus = this.cartOrders.find((item) => item.id === id);
            // console.log(cartStatus);
            cartStatus.qty = e.target.value
        }
    },
    getters: {
        cartList: ({ cartOrders }) => {
            const { products } = productStore();
            const carts = cartOrders.map((item) => {
                // console.log(item);
                const product = products.find((i) => i.id === item.productId);
                // console.log(product);
                return {
                    ...item,
                    product,
                    subTotal: item.qty * product.price
                }
            });
            // console.log(carts);
            const total = carts.reduce((a, b) => a + b.subTotal, 0);
            // console.log(total);
            return {
                carts,
                total,
            }
        }
    }
})