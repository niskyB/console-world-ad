import * as React from 'react';

interface TableHeadProps {
    fields: string[];
}

export const TableHead: React.FC<TableHeadProps> = ({ fields }) => {
    return (
        <>
            <thead className="bg-gray-50">
                <tr>
                    {fields.map((field) => (
                        <th key={field} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            {field}
                        </th>
                    ))}
                </tr>
            </thead>
        </>
    );
};
