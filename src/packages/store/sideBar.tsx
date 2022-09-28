import { ViewBoardsIcon } from '@heroicons/react/outline';
import { ArrowCircleLeftIcon, CalendarIcon, FolderIcon, HomeIcon, InboxIcon, TagIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { routes } from '../../core/routes';
import { useStoreUser } from '../../core/store';
import { logout } from '../auth';

interface SideBarProps {}

const _handleLogout = async () => {
    await logout();
    window.location.reload();
};

const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: routes.homeUrl, current: true },
    { name: 'Category', icon: ViewBoardsIcon, href: routes.categoryListUrl, current: false },
    { name: 'Product', icon: FolderIcon, href: routes.productListUrl, current: false },
    { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
    { name: 'Documents', icon: InboxIcon, href: '#', current: false },
    { name: 'Logout', icon: ArrowCircleLeftIcon, href: '#', onClick: _handleLogout, current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const SideBar: React.FC<SideBarProps> = () => {
    const user = useStoreUser();
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col flex-1 max-w-xs max-h-screen min-h-0 bg-gray-800 border-r border-gray-200">
                <div className="flex flex-col pt-5 pb-4">
                    <div className="flex items-center justify-center flex-shrink-0">
                        <div className="relative w-1/2 h-20">
                            <Image layout="fill" src="/asset/images/icon/logo-image.png" alt="Console World" />
                        </div>
                    </div>
                    <nav className="flex-1 px-2 mt-5 space-y-1 bg-gray-800" aria-label="Sidebar">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={item.onClick}
                                className={classNames(
                                    router.asPath === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 ',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-700 hover:text-white'
                                )}
                            >
                                <item.icon
                                    className={classNames(
                                        router.asPath === item.href ? 'text-gray-300' : 'text-gray-400 ',
                                        'mr-3 flex-shrink-0 h-6 w-6 group-hover:text-gray-300'
                                    )}
                                    aria-hidden="true"
                                />
                                <span className="flex-1">{item.name}</span>
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="flex p-4 mt-auto bg-gray-700">
                    <a href="#" className="flex-shrink-0 block w-full group">
                        <div className="flex items-center">
                            <div className="relative inline-block rounded-full h-9 w-9">
                                <Image layout="fill" src="/asset/images/icon/logo-image.png" alt="" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">{user.name}</p>
                                <Link href={routes.meUrl}>
                                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
                                </Link>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};
