import { Category } from './../../../../core/models';
import { http } from '../../../../core/api';

export const getCategoryList = async (data = '') => {
    const res = await http.get<Category[]>(`/product-category?name=${data}`);
    return res.data;
};
