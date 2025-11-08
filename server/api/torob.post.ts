import {TorobPaySettle, TorobPayVerify} from "~/services/torobPay.service";


export default defineEventHandler( async (event) => {
    const rawBody = await readRawBody(event);

    let body: Record<string, string> = {}
    if (rawBody) {
        body = Object.fromEntries(new URLSearchParams(rawBody))
    }

    if(body.state !== 'OK')
        return sendRedirect(event, '/payment/failed')

    const tokenCookie = getCookie(event,'torobpay-payment');
    if(!tokenCookie)
        return sendRedirect(event, '/payment/failed')

    const paymentToken = tokenCookie.paymentToken;

    const verifyResult = await TorobPayVerify(paymentToken);
    if(!verifyResult.isSuccess || !verifyResult.data.successfull)
        return sendRedirect(event, '/payment/failed')

    const settleResult = await TorobPaySettle(paymentToken);
    if(!settleResult.isSuccess || !settleResult.data.successfull)
        return sendRedirect(event, '/payment/failed')

    return sendRedirect(event, '/payment/success')
})