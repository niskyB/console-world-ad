import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { toast } from 'react-toastify';
import { Message } from '../../../../core/common/constants/message';
import { AddCategoryDto, addNewCategory } from './action';
import Link from 'next/link';
import { routes } from '../../../../core/routes';
import { useRouter } from 'next/router';

const defaultValues: AddCategoryDto = {
    name: '',
};

interface AddNewCategoryProps {}

export const AddNewCategory: React.FC<AddNewCategoryProps> = () => {
    const methods = useForm<AddCategoryDto>({
        defaultValues,
    });
    const router = useRouter();

    const _handleOnSubmit = async (data: AddCategoryDto) => {
        try {
            await addNewCategory(data);
            toast.success(Message.ADD_NEW_CATEGORY_SUCCESS);
            router.push(routes.categoryListUrl);
        } catch (err) {
            toast.error(Message.ADD_NEW_CATEGORY_FAILED);
        }
    };

    return (
        <>
            <FormWrapper methods={methods}>
                <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div className="space-y-6 sm:space-y-5">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Category</h3>
                                <p className="max-w-2xl mt-1 text-sm text-gray-500">
                                    This information will be displayed publicly so be careful what you share.
                                </p>
                            </div>

                            <div className="space-y-6 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                    <TextField label="Name" name="name" />
                                </div>
                                <FormErrorMessage />
                            </div>
                        </div>
                    </div>

                    <div className="pt-5">
                        <div className="flex justify-end">
                            <Link href={routes.categoryListUrl}>
                                <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Cancel
                                </p>
                            </Link>
                            <button
                                type="submit"
                                className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </FormWrapper>
        </>
    );
};
