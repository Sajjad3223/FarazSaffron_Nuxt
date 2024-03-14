export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path.toLocaleLowerCase().startsWith('/profile') ||
        to.path.toLocaleLowerCase().startsWith('/admin') ||
        to.path.toLocaleLowerCase().startsWith('/shipping')
    ){
        //@ts-ignore
        if(process.client)
        {
            if(!useAuthStore().isLoggedIn){
                return navigateTo(`/auth/login?returnTo=${to.path}`);
            }
        }
    }
})