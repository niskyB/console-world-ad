import { LockClosedIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { toast } from 'react-toastify';
import { authLogin, AuthLoginDto } from './action';
import { Message } from '../../../../core/common/constants/message';

const defaultValues: AuthLoginDto = {
    password: '',
    email: '',
};

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
    const methods = useForm<AuthLoginDto>({
        defaultValues,
    });

    const _handleOnSubmit = async (data: AuthLoginDto) => {
        try {
            await authLogin(data);
            window.location.reload();
        } catch (err) {
            toast.error(Message.LOGIN_FAILED);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <div className="relative w-auto h-52">
                            <Image layout="fill" src="/asset/images/icon/logo-image.png" alt="Console World" />
                        </div>
                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">Sign In To Your Account</h2>
                    </div>
                    <FormWrapper methods={methods}>
                        <form className="mt-8 space-y-6" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="space-y-4 rounded-md shadow-sm">
                                <TextField label="Email" name="email" />
                                <TextField label="Password" name="password" type="password" />
                            </div>
                            <FormErrorMessage />
                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </>
    );
};
