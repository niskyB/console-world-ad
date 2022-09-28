import Link from 'next/link';
import * as React from 'react';
import { toast } from 'react-toastify';
import { SearchBox } from '../../../../core/components/form';
import { Table, TableBody, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { Product } from '../../../../core/models';
import { routes } from '../../../../core/routes';
import { getProductList } from './action';

interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = () => {
    const [ProductList, setProductList] = React.useState<Product[]>([]);

    const getList = async (data?: any) => {
        const res = await getProductList(data ? data.data : '');
        setProductList(res);
    };

    React.useEffect(() => {
        getList().catch(() => {
            toast.error('Get category list failed');
        });
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-1">
                    <h1 className="text-xl font-semibold text-gray-900">Categories</h1>
                    <p className="mt-2 text-sm text-gray-700">A list of all the categories in system.</p>
                </div>
                <SearchBox onSubmit={getList} placeholder="Enter category's name" />
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.newProductUrl}>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Product
                        </p>
                    </Link>
                </div>
            </div>

            <Table>
                <TableHead fields={['No.', 'Name', '']} />
                <TableBody>
                    {ProductList.map((product, index) => (
                        <TableRow key={product.id}>
                            <TableDescription>{index + 1}</TableDescription>
                            <TableDescription>{product.name}</TableDescription>
                            <TableDescription>
                                {
                                    <Link href="#">
                                        <p className="mr-4 text-right text-indigo-600 cursor-pointer hover:text-indigo-900">
                                            Edit<span className="sr-only">, {product.name}</span>
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
