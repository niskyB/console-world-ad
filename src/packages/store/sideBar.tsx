import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/solid';
import * as React from 'react';

interface SideBarProps {}

const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
    { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
    { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
    { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
    { name: 'Documents', icon: InboxIcon, href: '#', current: false },
    { name: 'Reports', icon: ChartBarIcon, href: '#', count: 12, current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const SideBar: React.FC<SideBarProps> = () => {
    return (
        <>
            <div className="flex flex-col flex-1 max-w-xs max-h-screen min-h-0 bg-gray-800 border-r border-gray-200">
                <div className="flex flex-col pt-5 pb-4">
                    <div className="flex items-center justify-center flex-shrink-0">
                        <img className="block w-auto h-20" src="/asset/images/icon/logo-image.png" alt="" />
                    </div>
                    <nav className="flex-1 px-2 mt-5 space-y-1 bg-gray-800" aria-label="Sidebar">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
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
                            <div>
                                <img
                                    className="inline-block rounded-full h-9 w-9"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Tom Cook</p>
                                <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};
