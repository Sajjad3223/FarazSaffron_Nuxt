

export default defineEventHandler( async (event)=>{
    if(event.method === 'POST'){
        const body:PaymentResult = await readBody(event);
        console.log(body);

        let redirectUrl = `http://localhost:3000/payment/verify?RefId=${body.RefId}&ResCode=${body.ResCode}&SaleOrderId=${body.SaleOrderId}`;
        /*if(body.ResCode === '0') {

            redirectUrl = `http://localhost:3000/payment/success`;
        }
        else
            redirectUrl = `http://localhost:3000/payment/failed`;*/

        event.node.res.writeHead(301,{ location: redirectUrl });
        event.node.res.end();
    }
})



export interface PaymentResult {
    RefId: string,
    ResCode: string,
    SaleOrderId: number,
    CardHolderInfo?: string | undefined | null,
    CardHolderPan?: string | undefined | null,
    FinalAmount?: number | undefined | null
}