import * as mongoose from 'mongoose';
export interface IPassenger extends mongoose.Document {
    firstName: string;
    lastName: string;
    email: string;
}
export declare const PassengerSchema: mongoose.Schema;
declare const Passenger: mongoose.Model<IPassenger, {}>;
export default Passenger;
