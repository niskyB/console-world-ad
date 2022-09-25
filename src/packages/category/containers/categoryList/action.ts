import { Category } from './../../../../core/models';
import { http } from '../../../../core/api';

export const getCategoryList = async () => {
    const res = await http.get<Category[]>('/product-category');
    return res.data;
};
