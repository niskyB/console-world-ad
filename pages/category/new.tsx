import * as React from 'react';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserRole } from '../../src/core/models/user';
import { AddNewCategory } from '../../src/packages/category';
import { DashBoardLayout } from '../../src/packages/store/dashBoardLayout';

interface NewCategoryPageProps {}

const NewCategoryPage: React.FC<NewCategoryPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <AddNewCategory />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default NewCategoryPage;
