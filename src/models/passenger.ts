import * as mongoose from 'mongoose';

export interface IPassenger extends mongoose.Document {
    firstName: string,
    lastName: string,
    email: string,
  };
  
  export const PassengerSchema = new mongoose.Schema({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email: {type:String, required: true, unique: true}
  });
  
  const Passenger = mongoose.model<IPassenger>('Passenger', PassengerSchema);
  export default Passenger;