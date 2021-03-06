import  { startDataBase, getBookingById, getBookings } from './database';
import * as express from 'express';
import { IBooking } from './models/Booking';
import { IBookings } from './models/bookings';

const app = express();
const port = 3000

startDataBase();

app.get('/bookings/:id', function(req, res) {
    const id = req.params.id;
    getBookingById(id).then(function(data: IBooking | null) {
        if (data) {
            res.send(data);
        } else {
            console.log('booking not found');
            res.send('Booking not found');
        }
    });
})

app.get('/bookings/', function(req, res) {
    if (req.query.uid) {
        console.log('received uid: ', req.query.uid)
        //TODO: Find bookings matching with uid and return
    }

    getBookings().then(function(data: IBookings[] | null) {
        if (data) {
            res.send(data);
        } else {
            console.log('booking not found');
            res.send('Booking not found');
        }
    });
})



app.listen(port, () => console.log(`App listening on port ${port}`));

