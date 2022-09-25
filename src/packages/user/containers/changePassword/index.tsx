import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { ChangePasswordDto, userChangePassword } from './action';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { routes } from '../../../../core/routes';

interface PasswordProps {}

const defaultValues: ChangePasswordDto = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
};

export const ChangePassword: React.FunctionComponent<PasswordProps> = () => {
    const methods = useForm<ChangePasswordDto>({ defaultValues });

    const _handleOnSubmit = async (data: ChangePasswordDto) => {
        try {
            await userChangePassword(data);
            toast.success('Change password successfully');
        } catch (err) {
            toast.error('Change password failed');
        }
    };

    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Change Password</h3>
                        </div>

                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <TextField label="Current Password" name="currentPassword" type="password" />
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4sm:pt-5">
                                <TextField label="New Password" name="newPassword" type="password" />
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4sm:pt-5">
                                <TextField label="Confirm Password" name="confirmNewPassword" type="password" />
                            </div>
                        </div>
                        <FormErrorMessage />
                    </div>
                </div>

                <div className="pt-5">
                    <Link href={routes.meUrl}>
                        <a className="text-base font-medium text-blue-700 hover:text-blue-800">Profile</a>
                    </Link>
                    <div className="flex justify-end">
                        <Link href={routes.meUrl}>
                            <a className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Cancel
                            </a>
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
