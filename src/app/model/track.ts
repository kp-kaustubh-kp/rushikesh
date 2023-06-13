export interface Track{
    id: number;
    image: string;
    orderconfirmed: boolean;
    pickedbycourier: boolean;
    ontheway: boolean;
    outfordelivery: boolean;
    delivered: boolean;
    pendings: boolean;
    productname: string;
    trackingid: string;
}