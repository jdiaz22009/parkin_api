import {IParkingLot} from '../../domain/models/parking_lot';
import {ParkingLotRepository} from '../../domain/repositories/parkingLotRepository';

export const getParkings = async (
  parkingLotRepository: ParkingLotRepository,
): Promise<IParkingLot[]> => {
  try {
    return await parkingLotRepository.getAllParking();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
