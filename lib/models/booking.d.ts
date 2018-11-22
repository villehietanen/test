import * as mongoose from 'mongoose';
import { IPassenger } from './passenger';
import { IFlight } from "./flight";
export interface IBooking extends mongoose.Document {
    passenger: IPassenger;
    flights: Array<IFlight>;
}
export declare const BookingSchema: mongoose.Schema;
declare const Booking: mongoose.Model<IBooking, {}>;
export default Booking;
