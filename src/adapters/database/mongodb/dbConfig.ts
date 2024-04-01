import mongoose from 'mongoose';

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI ?? '');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const disconnect = async () => {
  try {
    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error(error);
    throw error;
  }
};
