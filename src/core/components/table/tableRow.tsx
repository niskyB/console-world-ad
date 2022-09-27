import * as React from 'react';

interface TableRowProps extends React.PropsWithChildren {}

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
    return (
        <>
            <tr>{children}</tr>
        </>
    );
};
