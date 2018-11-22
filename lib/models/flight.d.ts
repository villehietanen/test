import * as mongoose from 'mongoose';
export interface IFlight extends mongoose.Document {
    departure: string;
    arrival: string;
    departureDate: Date;
    arrivalDate: Date;
}
export declare const FlightSchema: mongoose.Schema;
declare const Flight: mongoose.Model<IFlight, {}>;
export default Flight;
