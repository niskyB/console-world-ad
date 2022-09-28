import { Product } from './../../../../core/models';
import { http } from '../../../../core/api';

export const getProductList = async (data = '') => {
    const res = await http.get<Product[]>(`/products?name=${data}&minPrice=0&maxPrice=1000000&categories=[]&isSale=&currentPage=&pageSize=10&order=`);
    return res.data;
};
