import * as React from 'react';

interface TableDescriptionProps extends React.PropsWithChildren {}

export const TableDescription: React.FC<TableDescriptionProps> = ({ children }) => {
    return (
        <>
            <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{children}</td>
        </>
    );
};
