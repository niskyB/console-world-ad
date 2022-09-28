import { Category } from './category';

export interface Product {
    id: string;
    name: string;
    description: string;
    details: string;
    price: number;
    createAt: string;
    updateAt: string;
    imageUrl: string;
    quantity: number;
    isSale: boolean;
    categories: Category[];
}
