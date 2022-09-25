import * as React from 'react';

interface TableProps extends React.PropsWithChildren {}

export const Table: React.FC<TableProps> = ({ children }) => {
    return (
        <>
            <div className="flex flex-col mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">{children}</table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
