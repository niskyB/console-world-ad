import * as React from 'react';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserMe } from '../../src/packages/user/containers/me';
import { UserRole } from '../../src/core/models/user';
import { DashBoardLayout } from '../../src/packages/store/dashBoardLayout';

interface UserMePageProps {}

const UserMePage: React.FC<UserMePageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <UserMe />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default UserMePage;
