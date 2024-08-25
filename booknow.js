app.post('/book', (req, res) => {
    const bookingDetails = {
        destination: req.body.destination,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        guests: req.body.guests,
    };

    // Render the confirmation page with booking details
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Booking Confirmation</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="confirmation-container">
                <h2>Booking Confirmed!</h2>
                <p>Thank you for booking with us. Here are your booking details:</p>
                <div class="booking-details">
                    <p><strong>Destination:</strong> ${bookingDetails.destination}</p>
                    <p><strong>Check-in Date:</strong> ${bookingDetails.checkin}</p>
                    <p><strong>Check-out Date:</strong> ${bookingDetails.checkout}</p>
                    <p><strong>Number of Guests:</strong> ${bookingDetails.guests}</p>
                </div>
                <button onclick="window.location.href='/'">Back to Home</button>
            </div>
        </body>
        </html>
    `);
});