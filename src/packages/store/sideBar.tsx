import { ArrowCircleLeftIcon, CalendarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
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
    { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
    { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
    { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
    { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
    { name: 'Documents', icon: InboxIcon, href: '#', current: false },
    { name: 'Logout', icon: ArrowCircleLeftIcon, href: '#', onClick: _handleLogout, current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const SideBar: React.FC<SideBarProps> = () => {
    const user = useStoreUser();
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
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}
                            >
                                <item.icon
                                    className={classNames(
                                        item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                        'mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden="true"
                                />
                                <span className="flex-1">{item.name}</span>
                                {item.count ? (
                                    <span
                                        className={classNames(
                                            item.current ? 'bg-gray-800' : 'bg-gray-900 group-hover:bg-gray-800',
                                            'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                                        )}
                                    >
                                        {item.count}
                                    </span>
                                ) : null}
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
