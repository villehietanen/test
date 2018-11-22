import  { startDataBase, getBookings } from './database';
import * as express from 'express';
import { IBooking } from './models/Booking';

const app = express();
const port = 3000

startDataBase;

app.get('/bookings/:id', function(req, res) {
    const id = req.params.id;
    getBookings(id).then(function(data: IBooking | null) {
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
})

app.listen(port, () => console.log(`App listening on port ${port}`));

