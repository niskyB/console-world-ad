import * as React from 'react';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserRole } from '../../src/core/models/user';
import { ProductList } from '../../src/packages/product';
import { DashBoardLayout } from '../../src/packages/store/dashBoardLayout';

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <ProductList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default ProductPage;
