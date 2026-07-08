const express = require("express");
const router = express.Router();
const bookingLogic = require("../logic/bookingLogic");

// Done by Aditya: Handler to receive booking forms and validate details.
router.post("/addBooking", (req, res) => {
  try {
    const booking = bookingLogic.addBooking(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Done by Vignesh: Handler to list all recorded movie tickets.
router.get("/bookings", (req, res) => {
  res.json(bookingLogic.getBookings());
});

// Done by Vignesh: Handler to fetch single booking receipt details using route parameters.
router.get("/searchBooking/:id", (req, res) => {
  const booking = bookingLogic.searchBooking(req.params.id);
  if (booking) {
    res.json(booking);
  } else {
    res.status(404).json({ message: "No booking found with this ID!" });
  }
});

module.exports = router;
