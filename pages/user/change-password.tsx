import * as React from 'react';
import { AllRole } from '../../src/core/models/user';
//---- components
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { ChangePassword } from '../../src/packages/user/containers/changePassword';
import { DashBoardLayout } from '../../src/packages/store/dashBoardLayout';

interface PasswordPageProps {}

const PasswordPage: React.FunctionComponent<PasswordPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <DashBoardLayout>
                <ChangePassword />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default PasswordPage;
