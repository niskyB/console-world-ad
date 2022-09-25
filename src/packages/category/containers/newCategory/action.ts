import { http } from '../../../../core/api';
import { Category } from '../../../../core/models';

export interface AddCategoryDto extends Pick<Category, 'name'> {}

export const addNewCategory = async (data: AddCategoryDto) => {
    const res = await http.post('/product-category', data);
    return res;
};
