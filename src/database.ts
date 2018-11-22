import * as mongoose from 'mongoose';
import {Mockgoose} from 'mockgoose';
import Flight from './models/flight';
import Passenger from './models/passenger';
import Booking, { IBooking } from './models/Booking';

let mockgoose: Mockgoose = new Mockgoose(mongoose);

export const startDataBase = function() {
    mockgoose.prepareStorage().then(() => {
    mongoose.connect('mongodb://foobar/baz');
    mongoose.connection.on('connected', () => {  
        console.log('db connection is now open');

        const user1 = new Passenger({
            firstName: 'Eka',
            lastName: 'Matkustaja',
            email: 'a@a.fi'
        });
        user1.save();

        const user2 = new Passenger({
            firstName: 'Toinen',
            lastName: 'Matkustaja',
            email: 'toka@matka.fi'
        });
        user2.save();

        const flight1 = new Flight({
            departure: 'HEL',
            arrival: 'JFK',
            departureDate: new Date(2018, 11, 24),
            arrivalDate: new Date(2018, 11, 24),
        })
        flight1.save();

        const flight2 = new Flight({
            departure: 'CPH',
            arrival: 'STO',
            departureDate: new Date(2018, 11, 24),
            arrivalDate: new Date(2018, 11, 24),
        });
        flight2.save();

        const flight3 = new Flight({
            departure: 'STO',
            arrival: 'CPH',
            departureDate: new Date(2018, 11, 24),
            arrivalDate: new Date(2018, 11, 24),
        });
        flight3.save();

        const booking1 = new Booking({
            passenger: user1,
            flights: [ 
                flight1
            ]
        });
        booking1.save();

        const booking2 = new Booking({
            passenger: user2,
            flights: [ 
                flight2,
                flight3
            ]
        });
        booking2.save();
    });  
    });
}

export const getBookingById = function(id: mongoose.Types.ObjectId): Promise<IBooking | null> {
    const booking = Booking.findById(id).populate('passenger flights').then(function (booking) {
        return booking;
    }).catch(function() {
        console.log('an error occurred');
        return null;
    });
    return booking;
}

export const getBookings = function(): Promise<IBooking[] | null> {
    console.log('123');
    const booking = Booking.find({}).populate('passenger flights').then(function (booking) {
        return booking;
    }).catch(function() {
        console.log('an error occurred');
        return null;
    });
    return booking;
}


