import { IProductRating } from "./productRating";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IProductRating
}