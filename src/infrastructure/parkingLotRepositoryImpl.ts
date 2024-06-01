import {MongoError} from 'mongodb';
import {connect, disconnect} from '../adapters/database/mongodb/dbConfig';
import {IParkingLot, parkingLotModel} from '../domain/models/parking_lot';
import {ParkingLotRepository} from '../domain/repositories/parkingLotRepository';

export class ParkingLotRepositoryImpl implements ParkingLotRepository {
  async getAllParking(): Promise<IParkingLot[]> {
    try {
      await connect();
      const parkings = await parkingLotModel.find();
      await disconnect();
      return parkings;
    } catch (error) {
      throw error;
    }
  }
}
