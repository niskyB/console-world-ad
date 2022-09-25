import { useRouter } from 'next/router';
import * as React from 'react';
import { logout } from '../../../packages/auth';
import { UserRole } from '../../models/user';
import { routes } from '../../routes';
import { store, useStoreUser } from '../../store';
import { userActions } from '../../store/user';

interface RouterProtectionWrapperProps extends React.PropsWithChildren {
    acceptRoles: Array<UserRole>;
}

export const RouterProtectionWrapper: React.FC<RouterProtectionWrapperProps> = ({ children, acceptRoles }) => {
    const user = useStoreUser();
    const router = useRouter();
    const logoutUser = async () => {
        await logout();
    };

    React.useEffect(() => {
        if (user.isLogin && (!user.id || acceptRoles.findIndex((item) => item === user.role) === -1)) {
            logoutUser();
            store.dispatch(userActions.resetState());
            router.push(routes.loginUrl);
        }
    }, [acceptRoles, user, router]);

    return <>{children}</>;
};
