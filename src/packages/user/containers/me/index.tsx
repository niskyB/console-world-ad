import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { routes } from '../../../../core/routes';
import { editProfile, EditProfileDto, getMe } from './action';
import { toast } from 'react-toastify';

const defaultValues: EditProfileDto = {
    name: '',
    phone: '',
};

interface UserMeProps {}

export const UserMe: React.FC<UserMeProps> = () => {
    const methods = useForm<EditProfileDto>({ defaultValues });

    React.useEffect(() => {
        getMe().then((res) => {
            methods.setValue('name', res.name);
            methods.setValue('phone', res.phone);
        });
    }, []);

    const _handleSubmit = async (data: EditProfileDto) => {
        try {
            await editProfile(data);
            toast.success('Update profile successfully');
        } catch (err) {
            toast.error('Update profile failed');
        }
    };

    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>

                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <TextField label="Name" name="name" />
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4sm:pt-5">
                                <TextField label="Phone" name="phone" />
                            </div>
                            <FormErrorMessage />
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <Link href={routes.changePasswordUrl}>
                        <p className="text-base font-medium text-blue-700 cursor-pointer hover:text-blue-800">Change password</p>
                    </Link>
                    <div className="flex justify-end">
                        <Link href={routes.homeUrl}>
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
    );
};
