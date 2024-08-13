export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path.toLocaleLowerCase().startsWith('/profile') ||
        to.path.toLocaleLowerCase().startsWith('/admin') ||
        to.path.toLocaleLowerCase().startsWith('/checkout/shipping')
    ){
        //@ts-ignore
        if(process.client)
        {
            if(!useAuthStore().isLoggedIn){
                throw createError({
                    statusCode: 403,
                    statusMessage: 'Access Denied',
                })
            }
        }
    }
})