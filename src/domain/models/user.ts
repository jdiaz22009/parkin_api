import {Schema, model, Document} from 'mongoose';

export interface IUser extends Document {
  phoneNumber: string;
  disabled?: boolean;
  firstName?: string;
  lastName?: string;
  birthdate?: string;
  photoURL?: string;
  email?: string;
  uuid?: string;
  emailVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>({
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''},
  phoneNumber: {type: String, unique: true, required: true},
  email: {type: String, default: '', unique: true},
  emailVerified: {type: Boolean, default: false},
  photoURL: {type: String, default: ''},
  uuid: {type: String},
  birthdate: {type: String},
  disabled: {type: Boolean, default: false},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

export const userModel = model<IUser>('user', userSchema);
