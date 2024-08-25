const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/book', (req, res) => {
    const bookingDetails = {
        destination: req.body.destination,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        guests: req.body.guests,
    };

    // Here you can handle the booking details, such as saving to a database or sending an email
    console.log(bookingDetails);
    res.send('Booking successful! Details: ' + JSON.stringify(bookingDetails));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});