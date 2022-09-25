import Link from 'next/link';
import * as React from 'react';
import { Table, TableBody, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { Category } from '../../../../core/models';
import { routes } from '../../../../core/routes';
import { getCategoryList } from './action';

interface CategoryListProps {}

export const CategoryList: React.FC<CategoryListProps> = () => {
    const [categoryList, setCategoryList] = React.useState<Category[]>([]);

    const getList = async () => {
        return await getCategoryList();
    };

    React.useEffect(() => {
        getList().then((res) => {
            setCategoryList(res);
            console.log(res);
        });
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Categories</h1>
                    <p className="mt-2 text-sm text-gray-700">A list of all the categories in system.</p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.newCategoryUrl}>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Category
                        </p>
                    </Link>
                </div>
            </div>

            <Table>
                <TableHead fields={['No.', 'Name', '']} />
                <TableBody>
                    {categoryList.map((category, index) => (
                        <TableRow key={category.id}>
                            <TableDescription>{index + 1}</TableDescription>
                            <TableDescription>{category.name}</TableDescription>
                            <TableDescription>
                                {
                                    <Link href="#">
                                        <p className="mr-4 text-right text-indigo-600 cursor-pointer hover:text-indigo-900">
                                            Edit<span className="sr-only">, {category.name}</span>
                                        </p>
                                    </Link>
                                }
                            </TableDescription>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
