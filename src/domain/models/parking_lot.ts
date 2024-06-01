import {Schema, model, Document} from 'mongoose';

export interface IParkingLot extends Document {
  nameParking: string;
  address: string;
  isGoogle: boolean;
  location: ILocation;
  type: string[];
  photos: string[];
  rating: number;
  userRatingsTotal: number;
  placeId?: string;
  reference?: string;
  state: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILocation extends Document {
  lat: string;
  lng: string;
}

const parkingLotSchema = new Schema<IParkingLot>({
  nameParking: {type: String, default: ''},
  address: {type: String, default: ''},
  isGoogle: {type: Boolean, default: false},
  location: {
    lat: {type: String, default: ''},
    lng: {type: String, default: ''},
  },
  type: [{type: String}],
  photos: [{type: String}],
  rating: {type: Number, default: 0},
  userRatingsTotal: {type: Number, default: 0},
  placeId: {type: String, default: ''},
  reference: {type: String, default: ''},
  state: {type: String, default: ''},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

export const parkingLotModel = model<IParkingLot>(
  'parkinglot',
  parkingLotSchema,
);
