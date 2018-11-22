import * as mongoose from 'mongoose';
import { IBooking } from './models/Booking';
export declare const startDataBase: Promise<void>;
export declare const getBookings: (id: mongoose.Types.ObjectId) => Promise<IBooking | null>;
