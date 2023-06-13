export interface ProductDetails{
    id:number;
    product_name:string;
    product_description:string;
    product_unit_price:number;
    product_unit_instock:number;
    active:boolean;
    product_discount_percentage:string,
    product_sale_count:number;
    product_datecreated:Date;
    product_lastupdated:Date;
    product_discount_price:number;
    productImages:pro[];
  }

export interface pro{
    id:number;
    image1:string;
    image2:string;
    image3:string;
    image4:string;
    image5:string;
}