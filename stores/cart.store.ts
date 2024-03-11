import {AddToCart, GetPendingOrder} from "~/services/cart.service";
import type {OrderDto} from "~/models/cart/cartQueries";

export const useCartStore = defineStore("cart",()=>{
    const PendingOrder:Ref<OrderDto | null> = ref(null);
    const cartItemsCount = ref(0);
    const cartLoading = ref(false);

    const toast = useToast();

    const addToCart = async (id:number)=>{
        const result = await AddToCart(id);
        if(result.isSuccess){
            await toast.showToast();
        }

        await refreshCart();
    }

    const refreshCart = async ()=>{
        cartLoading.value = true;

        const result = await GetPendingOrder();
        if(result.isSuccess){
            PendingOrder.value = result.data!;
            cartItemsCount.value = result.data?.itemsCount!;
        }

        cartLoading.value = false;
    }

    return {
        addToCart,
        refreshCart,
        PendingOrder,
        cartItemsCount,
        cartLoading
    };
})