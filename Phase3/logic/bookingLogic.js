const repository = require("../repository/bookingRepository");

let bookings = repository.loadBookings();

// Aditya: Phase 2 — addBooking logic with validations (Rule 1 & Rule 2)
exports.addBooking = (bookingData) => {
  // check if seat is already booked for this show
  for (let i = 0; i < bookings.length; i++) {
    if (
      bookings[i].seatNo === bookingData.seatNo &&
      bookings[i].showTime === bookingData.showTime
    ) {
      throw new Error("Seat is already booked for this show time");
    }
  }

  // price shouldn't be negative
  if (bookingData.ticketPrice < 0) {
    throw new Error("Ticket price cannot be negative");
  }

  // generate booking id
  let nextId = 101;
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].bookingId >= nextId) {
      nextId = bookings[i].bookingId + 1;
    }
  }

  const newBooking = {
    bookingId: nextId,
    customerName: bookingData.customerName,
    movieName: bookingData.movieName,
    showTime: bookingData.showTime,
    seatNo: bookingData.seatNo,
    ticketPrice: parseFloat(bookingData.ticketPrice),
  };

  bookings.push(newBooking);

  // Aditya: Phase 3 — save bookings to file
  repository.saveBookings(bookings);

  return newBooking;
};

// Vignesh: Phase 2 — getBookings
exports.getBookings = () => {
  return bookings;
};

// Vignesh: Phase 2 — searchBooking by id
exports.searchBooking = (bookingId) => {
  const id = parseInt(bookingId);
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].bookingId === id) {
      return bookings[i];
    }
  }
  return null;
};
