import {TorobPaySettle, TorobPayVerify} from "~/services/torobPay.service";
import {BASE_URL} from "~/utilities/api.config";


export default defineEventHandler( async (event) => {
    try{
        const rawBody = await readRawBody(event);

        let body: Record<string, string> = {}
        if (rawBody) {
            body = Object.fromEntries(new URLSearchParams(rawBody))
        }

        console.log(body);

        if(body.state !== 'OK')
            return sendRedirect(event, '/payment/failed')

        /*const tokenCookie = getCookie(event,'torobpay-payment');
        console.log(tokenCookie)
        if(!tokenCookie)
            return sendRedirect(event, '/payment/failed')

        const paymentToken = JSON.parse(tokenCookie).paymentToken;
        console.log(paymentToken);

        const authToken = getCookie(event,'c-access-token');*/

        const verifyResult = await $fetch(`/torobPay/verify?transactionId=${body.transactionId}`,{
            baseURL:BASE_URL,
            method:'GET'
        });

        console.log(verifyResult);

        //const verifyResult = await TorobPayVerify(paymentToken);
        if(!verifyResult.isSuccess || !verifyResult.data.successful)
            return sendRedirect(event, '/payment/failed')

        const settleResult = await $fetch(`/torobPay/settle?transactionId=${body.transactionId}`,{
            baseURL:BASE_URL,
            method:'GET'
        });

        //const settleResult = await TorobPaySettle(paymentToken);
        if(!settleResult.isSuccess || !settleResult.data.successful)
            return sendRedirect(event, '/payment/failed')

        return sendRedirect(event, `/payment/success?saleRefId=${settleResult.data}&orderId=${body.transactionId}`)
    }
    catch (e) {
        console.log(e);
        return sendRedirect(event, '/payment/failed')
    }
})