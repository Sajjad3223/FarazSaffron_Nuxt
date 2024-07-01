
export const useUtilStore = defineStore("utils",()=>{
    const globalLoading = ref(false);

    const isMobile = ()=> (process.client) ? window.innerWidth <= 768 : false;

    return{
        globalLoading,
        isMobile
    }
})