import * as React from 'react';

interface TableBodyProps extends React.PropsWithChildren {}

export const TableBody: React.FC<TableBodyProps> = ({ children }) => {
    return (
        <>
            <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
        </>
    );
};
