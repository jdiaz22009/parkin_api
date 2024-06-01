import {IParkingLot} from '../models/parking_lot';

export interface ParkingLotRepository {
  getAllParking(): Promise<IParkingLot[]>;
}
