import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { routes } from '../src/core/routes';

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
    return (
        <>
            <div className="flex flex-col min-h-full pt-16 pb-12 bg-white">
                <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-center flex-shrink-0">
                        <div className="relative w-1/2 h-52">
                            <Link href={routes.homeUrl}>
                                <a className="inline-flex">
                                    <span className="sr-only">Console World</span>
                                    <Image layout="fill" src="/asset/images/icon/logo-image.png" alt="" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="py-8">
                        <div className="text-center">
                            <p className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">500</p>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Internal server error.</h1>
                            <p className="mt-2 text-base text-gray-500">Sorry, something went wrong.</p>
                            <div className="mt-6">
                                <Link href={routes.homeUrl}>
                                    <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                                        Go back home
                                        <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default ErrorPage;
