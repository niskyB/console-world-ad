import * as React from 'react';
import { useForm } from 'react-hook-form';

interface SearchBoxProps {
    onSubmit: (value?: any) => void;
    placeholder?: string;
}

const defaultValues = {
    data: '',
};

export const SearchBox: React.FC<SearchBoxProps> = ({ onSubmit, placeholder }) => {
    const { register, handleSubmit } = useForm({ defaultValues });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex-auto mx-auto mt-4 sm:mt-0 sm:mx-auto sm:flex sm:max-w-lg">
            <div className="flex-1 min-w-0">
                <input
                    className="block w-full px-5 py-2 text-base text-gray-900 placeholder-gray-500 border rounded-md shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    placeholder={placeholder}
                    {...register('data')}
                />
            </div>
            <div className="my-auto sm:ml-3">
                <button
                    type="submit"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                    Search
                </button>
            </div>
        </form>
    );
};
