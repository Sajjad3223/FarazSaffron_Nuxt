import Swal from 'sweetalert2';

export const useCartStore = defineStore("cart",()=>{
    const cartItems = ref([]);
    const cartItemsCount = ref(0);

    const addToCart = async (id:number)=>{
        cartItemsCount.value++;
        await Swal.fire({
            title:"محصول به سبد خرید اضافه شد.",
            icon:'success',
            timerProgressBar:true,
        });
    }

    return {
        addToCart,
        cartItems,
        cartItemsCount
    };
})