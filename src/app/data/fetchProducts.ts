import axios from "axios";
import { IProduct } from "../models/product";

export function fetchProducts() {
    const products: IProduct[] = [
        {
            id: 1,
            title: 'Jacket',
            description: 'This is new leather jacket',
            price: 1000,
            category: 'Clothes',
            image: '',
            rating: {
                rate: 7,
                count: 174
            }
        }
    ];

    try {
        // const respone = axios.get<IProduct[]>('https://fakestoreapi.com/products');
        // products = respone.data;
    } catch (e) {
        alert(e);
    }

    return products;
}

