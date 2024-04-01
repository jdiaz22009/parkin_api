import {APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';

import {IUser} from '../../domain/models/user';
import {createUser} from '../../providers/users/users';
import {UserRepositoryImpl} from '../../infrastructure/userRepositoryImpl';
import {handleResponse} from '../../utils/handleResponse';

export const addUser = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    const {body} = event;
    const payload: IUser = JSON.parse(body!);
    const createdUser = await createUser(payload, new UserRepositoryImpl());
    return handleResponse(200, {data: createdUser});
  } catch (error: any) {
    return handleResponse(error?.code, {
      error: error?.message,
      status: error?.code,
      data: null,
    });
  }
};
