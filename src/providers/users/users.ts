import {IUser} from '../../domain/models/user';
import {UserRepository} from '../../domain/repositories/userRepository';

export const createUser = async (
  user: IUser,
  userRepository: UserRepository,
): Promise<IUser> => {
  try {
    return await userRepository.createUser(user);
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
