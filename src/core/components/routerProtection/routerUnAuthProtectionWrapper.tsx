import { useRouter } from 'next/router';
import * as React from 'react';
import { logout } from '../../../packages/auth';
import { UserRole } from '../../models/user';
import { routes } from '../../routes';
import { useStoreUser } from '../../store';

interface RouterUnAuthProtectionWrapperProps extends React.PropsWithChildren {
    acceptRoles: Array<UserRole>;
}

export const RouterUnAuthProtectionWrapper: React.FC<RouterUnAuthProtectionWrapperProps> = ({ children, acceptRoles }) => {
    const user = useStoreUser();
    const router = useRouter();
    const logoutUser = async () => {
        await logout();
    };

    React.useEffect(() => {
        if (user.isLogin && user.id && acceptRoles.findIndex((item) => item === user.role) !== -1) {
            router.push(routes.homeUrl);
        } else if (user.isLogin && user.id && acceptRoles.findIndex((item) => item === user.role) === -1) {
            logoutUser();
        }
    }, [user, router, acceptRoles]);

    return <>{children}</>;
};
