import * as React from 'react';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserRole } from '../../src/core/models/user';
import { CategoryList } from '../../src/packages/category/containers/categoryList';
import { DashBoardLayout } from '../../src/packages/store/dashBoardLayout';

interface CategoryPageProps {}

const CategoryPage: React.FC<CategoryPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <CategoryList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default CategoryPage;
