import { http } from '../../../../core/api';
import { User } from '../../../../core/models';

export interface EditProfileDto extends Pick<User, 'name' | 'phone'> {}

export const getMe = async () => {
    const res = await http.get<User>('/user/me');
    return res.data;
};

export const editProfile = async (input: EditProfileDto) => {
    const res = await http.put('/user', input);
    return res;
};
