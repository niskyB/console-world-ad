import * as React from 'react';
import { SideBar } from './sideBar';

interface DashBoardLayoutProps extends React.PropsWithChildren {}

export const DashBoardLayout: React.FunctionComponent<DashBoardLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="flex h-full min-h-screen bg-white">
                <SideBar />
                <div className="flex-1 max-h-screen overflow-y-auto">
                    <div className="w-full max-w-full p-10 mx-auto">{children}</div>
                </div>
            </div>
        </>
    );
};
