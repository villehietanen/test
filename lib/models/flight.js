"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.FlightSchema = new mongoose.Schema({
    departure: { type: String, required: true, minlength: 3, maxlength: 3 },
    arrival: { type: String, required: true, minlength: 3, maxlength: 3 },
    departureDate: { type: Date, required: true },
    arrivalDate: { type: Date, required: true },
});
var Flight = mongoose.model('Flight', exports.FlightSchema);
exports.default = Flight;
