import {AddToCart, DecreaseCount, GetPendingOrder, IncreaseCount, RemoveItem} from "~/services/cart.service";
import type {OrderDto} from "~/models/cart/cartQueries";
import {ToastType} from "~/composables/useSwal";
import type {ApiResponse} from "~/models/apiResponse";

export const useCartStore = defineStore("cart",()=>{
    const PendingOrder:Ref<OrderDto | null | undefined> = ref(null);
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
            PendingOrder.value = result.data;
            cartItemsCount.value = result.data?.itemsCount ?? 0;
        }

        cartLoading.value = false;
    }

    const increaseCount = async (itemId:number):Promise<boolean> => {
        cartLoading.value = true;

        const result = await IncreaseCount(itemId);

        cartLoading.value = false;
        return handleResult(result);
    }
    const decreaseCount = async (itemId:number):Promise<boolean>=>{
        cartLoading.value = true;

        const result = await DecreaseCount(itemId);

        cartLoading.value = false;
        return handleResult(result);
    }

    const handleResult = async (result:ApiResponse<any>):Promise<boolean> => {
        if(result.isSuccess){
            await toast.showToast(result.metaData.message,ToastType.success,3000,true);
        }else{
            await toast.showToast(result.metaData.message,ToastType.error,3000,true);
            return false;
        }

        await refreshCart();
        return true;
    }

    const removeItem = async (itemId:number):Promise<boolean>=>{
        cartLoading.value = true;

        const result = await RemoveItem(itemId);

        cartLoading.value = false;
        return handleResult(result);
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