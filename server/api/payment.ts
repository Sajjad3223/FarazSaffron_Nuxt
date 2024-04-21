export default defineEventHandler( async (event)=>{
    if(event.method === 'POST'){
        const body:PaymentResult = await readBody(event);
        console.log(body);

        const redirectUrl = `http://localhost:3000/payment/verify?refId=${body.RefId}&resCode=${body.ResCode}&saleOrderId=${body.SaleOrderId}`;
        event.res.writeHead(301,{ location: redirectUrl });
        event.res.end();
    }
})

export interface PaymentResult {
    RefId: string,
    ResCode: string,
    SaleOrderId: number,
    SaleReferenceId: number,
    CardHolderInfo: string,
    CardHolderPan: string,
    FinalAmount: number
}