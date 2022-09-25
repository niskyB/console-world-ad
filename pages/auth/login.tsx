import * as React from 'react';
import { RouterUnAuthProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserRole } from '../../src/core/models/user';
import { Login } from '../../src/packages/auth';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <Login />
        </RouterUnAuthProtectionWrapper>
    );
};

export default LoginPage;
