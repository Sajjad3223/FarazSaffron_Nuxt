import {AddToCart, DecreaseCount, GetPendingOrder, IncreaseCount, RemoveItem} from "~/services/cart.service";
import type {OrderDto} from "~/models/cart/cartQueries";
import {ToastType} from "~/composables/useSwal";
import {awaitExpression} from "@babel/types";

export const useCartStore = defineStore("cart",()=>{
    const PendingOrder:Ref<OrderDto | null> = ref(null);
    const cartItemsCount = ref(0);
    const cartLoading = ref(false);

    const toast = useToast();

    const addToCart = async (id:number)=>{
        const result = await AddToCart(id);
        if(result.isSuccess){
            await toast.showToast(result.metaData.message,ToastType.success,3000,true);
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

    const increaseCount = async (itemId:number)=>{
        cartLoading.value = true;

        const result = await IncreaseCount(itemId);
        if(result.isSuccess){
            await toast.showToast(result.metaData.message,ToastType.success,3000,true);
        }else{
            await toast.showToast(result.metaData.message,ToastType.error,3000,true);
        }

        cartLoading.value = false;
        await refreshCart();
    }
    const decreaseCount = async (itemId:number)=>{
        cartLoading.value = true;

        const result = await DecreaseCount(itemId);
        if(result.isSuccess){
            await toast.showToast(result.metaData.message,ToastType.success,3000,true);
        }else{
            await toast.showToast(result.metaData.message,ToastType.error,3000,true);
        }

        cartLoading.value = false;
        await refreshCart();
    }
    const removeItem = async (itemId:number)=>{
        cartLoading.value = true;

        const result = await RemoveItem(itemId);
        if(result.isSuccess){
            await toast.showToast(result.metaData.message,ToastType.success,3000,true);
        }else{
            await toast.showToast(result.metaData.message,ToastType.error,3000,true);
        }

        cartLoading.value = false;
        await refreshCart();
    }

    return {
        addToCart,
        refreshCart,
        PendingOrder,
        cartItemsCount,
        cartLoading,
        increaseCount,
        decreaseCount,
        removeItem
    };
})