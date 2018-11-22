import * as mongoose from 'mongoose';
import { IBooking } from './models/Booking';
export declare const startDataBase: () => void;
export declare const getBookingById: (id: mongoose.Types.ObjectId) => Promise<IBooking | null>;
export declare const getBookings: () => Promise<IBooking[] | null>;
