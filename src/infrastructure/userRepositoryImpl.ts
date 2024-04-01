import {MongoError} from 'mongodb';
import {connect, disconnect} from '../adapters/database/mongodb/dbConfig';
import {IUser, userModel} from '../domain/models/user';
import {UserRepository} from '../domain/repositories/userRepository';

export class UserRepositoryImpl implements UserRepository {
  async createUser(user: IUser): Promise<IUser> {
    try {
      await connect();
      const addUser = await userModel.create(user);
      await disconnect();
      return addUser;
    } catch (error) {
      await disconnect();

      if (error instanceof MongoError && error.code === 11000) {
        const customError = {
          code: 400,
          message: 'Ya existe un usuario con ese número de teléfono.',
        };
        throw customError;
      }
      throw error;
    }
  }
}
