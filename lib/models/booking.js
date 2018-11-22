"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.BookingSchema = new mongoose.Schema({
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'Passenger', required: true },
    flights: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true }]
});
var Booking = mongoose.model('Booking', exports.BookingSchema);
exports.default = Booking;
