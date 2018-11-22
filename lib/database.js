"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mockgoose_1 = require("mockgoose");
var flight_1 = require("./models/flight");
var passenger_1 = require("./models/passenger");
var Booking_1 = require("./models/Booking");
var mockgoose = new mockgoose_1.Mockgoose(mongoose);
exports.startDataBase = mockgoose.prepareStorage().then(function () {
    mongoose.connect('mongodb://foobar/baz');
    mongoose.connection.on('connected', function () {
        console.log('db connection is now open');
        var user1 = new passenger_1.default({
            firstName: 'Eka',
            lastName: 'Matkustaja',
            email: 'a@a.fi'
        });
        user1.save();
        var user2 = new passenger_1.default({
            firstName: 'Toinen',
            lastName: 'Matkustaja',
            email: 'toka@matka.fi'
        });
        user2.save();
        var flight1 = new flight_1.default({
            departure: 'HEL',
            arrival: 'JFK',
            departureDate: new Date(2018, 11, 24),
            arrivalDate: new Date(2018, 11, 24),
        });
        flight1.save();
        var flight2 = new flight_1.default({
            departure: 'CPH',
            arrival: 'STO',
            departureDate: new Date(2018, 11, 24),
            arrivalDate: new Date(2018, 11, 24),
        });
        flight2.save();
        var flight3 = new flight_1.default({
            departure: 'STO',
            arrival: 'CPH',
            departureDate: new Date(2018, 11, 24),
            arrivalDate: new Date(2018, 11, 24),
        });
        flight3.save();
        var booking1 = new Booking_1.default({
            passenger: user1,
            flights: [
                flight1
            ]
        });
        booking1.save();
        var booking2 = new Booking_1.default({
            passenger: user2,
            flights: [
                flight2,
                flight3
            ]
        });
        booking2.save();
    });
});
exports.getBookings = function (id) {
    var booking = Booking_1.default.findById(id).populate('passenger flights').then(function (booking) {
        return booking;
    });
    return booking;
};
