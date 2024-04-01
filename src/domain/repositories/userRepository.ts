import {IUser} from '../models/user';

export interface UserRepository {
  createUser(user: IUser): Promise<IUser>;
}
