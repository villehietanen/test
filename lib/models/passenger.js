"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
;
exports.PassengerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
var Passenger = mongoose.model('Passenger', exports.PassengerSchema);
exports.default = Passenger;
