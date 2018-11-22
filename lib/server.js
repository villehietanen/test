"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
var express = require("express");
var app = express();
var port = 3000;
database_1.startDataBase;
app.get('/bookings/:id', function (req, res) {
    var id = req.params.id;
    database_1.getBookings(id).then(function (data) {
        if (data) {
            res.send(data);
        }
        else {
            console.log('booking not found');
            res.send('Booking not found');
        }
    });
});
app.get('/bookings/', function (req, res) {
    if (req.query.uid) {
        console.log('received uid: ', req.query.uid);
        //TODO: Find bookings matching with uid and return
    }
});
app.listen(port, function () { return console.log("App listening on port " + port); });
