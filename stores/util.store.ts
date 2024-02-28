
export const useUtilStore = defineStore("utils",()=>{
    const globalLoading = ref(false);

    const isMobile = () => {
        if (process.client) {
            if (window) {
                return window.innerWidth <= 768;
            }
        }
        return false;
    };

    return{
        globalLoading,
        isMobile
    }
})