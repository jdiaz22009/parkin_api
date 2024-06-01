import {APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';
import {getParkings} from '../../providers/parkings/parkings';
import {ParkingLotRepositoryImpl} from '../../infrastructure/parkingLotRepositoryImpl';
import {handleResponse} from '../../utils/handleResponse';

export const getParking = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    const parkings = await getParkings(new ParkingLotRepositoryImpl());
    return handleResponse(200, {data: parkings});
  } catch (error: any) {
    return handleResponse(error?.code, {
      error: error?.message,
      status: error?.code,
      data: null,
    });
  }
};
