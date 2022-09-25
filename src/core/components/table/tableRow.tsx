import * as React from 'react';

interface TableRowProps extends React.PropsWithChildren {
    key: string;
}

export const TableRow: React.FC<TableRowProps> = ({ children, key }) => {
    return (
        <>
            <tr key={key}>{children}</tr>
        </>
    );
};
