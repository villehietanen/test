import * as mongoose from 'mongoose';

export interface IFlight extends mongoose.Document {
    departure: string,
    arrival: string,
    departureDate: Date,
    arrivalDate: Date
}

export const FlightSchema = new mongoose.Schema({
    departure: {type: String, required: true},
    arrival: {type: String, required: true},
    departureDate: {type: Date, required: true},
    arrivalDate: {type: Date, required: true},
});

const Flight = mongoose.model<IFlight>('Flight', FlightSchema);
export default Flight;