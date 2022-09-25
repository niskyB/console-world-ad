import type { NextPage } from 'next';
import { RouterProtectionWrapper } from '../src/core/components/routerProtection';
import { UserRole } from '../src/core/models/user';
import { DashBoardLayout } from '../src/packages/store/dashBoardLayout';

const Home: NextPage = () => {
    return (
        <div>
            <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
                <DashBoardLayout></DashBoardLayout>
            </RouterProtectionWrapper>
        </div>
    );
};

export default Home;
