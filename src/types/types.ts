

export type MenuType = {
    id: string;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string
}[]

export type ProductType = {
    id: string;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: {title:string; additionalPrice:number}[];
}[]

export type OrderType = {
    id: string;
    createdAt: Date;
    price: number;
    products: CartItemType[];
    status: string;
    intent_id?: String;
    userEmail: string;
}

export type CartItemType = {
    id:string;
    price:number;
    title:string;
    quantity:number;
    optionTitle?:string;
    img?:string
}