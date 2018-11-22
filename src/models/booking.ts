import * as mongoose from 'mongoose';
import { IPassenger } from './passenger'
import { IFlight } from "./flight";

export interface IBooking extends mongoose.Document {
    passenger: IPassenger,
    flights: Array<IFlight>
}

export const BookingSchema = new mongoose.Schema({
    passenger: {type: mongoose.Schema.Types.ObjectId, ref: 'Passenger', required: true },
    flights: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true}]
});

const Booking = mongoose.model<IBooking>('Booking', BookingSchema);
export default Booking;