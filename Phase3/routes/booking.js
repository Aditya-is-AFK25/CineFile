const express = require("express");
const router = express.Router();
const bookingLogic = require("../logic/bookingLogic");

// Aditya: Phase 2 — POST /addBooking route
router.post("/addBooking", (req, res) => {
  try {
    const booking = bookingLogic.addBooking(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Vignesh: Phase 2 — GET /bookings route
router.get("/bookings", (req, res) => {
  res.json(bookingLogic.getBookings());
});

// Vignesh: Phase 2 — GET /searchBooking/:id route
router.get("/searchBooking/:id", (req, res) => {
  const booking = bookingLogic.searchBooking(req.params.id);
  if (booking) {
    res.json(booking);
  } else {
    res.status(404).json({ message: "Booking not found" });
  }
});

module.exports = router;
