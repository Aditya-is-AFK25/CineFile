// Done by Aditya & Vignesh: Initial seed bookings matching the table from Phase 1 UI.
let bookings = [
  {
    bookingId: 101,
    customerName: "Harmeet",
    movieName: "Avengers",
    showTime: "6 PM",
    seatNo: "A5",
    ticketPrice: 350
  },
  {
    bookingId: 102,
    customerName: "Aditya",
    movieName: "Interstellar",
    showTime: "3 PM",
    seatNo: "B12",
    ticketPrice: 400
  }
];

// Done by Aditya: This is the addBooking function containing validations for Rule 1 and Rule 2.
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
    ticketPrice: parseFloat(bookingData.ticketPrice)
  };

  bookings.push(newBooking);
  return newBooking;
};

// Done by Vignesh: This function returns the list of all bookings currently stored in memory.
exports.getBookings = () => {
  return bookings;
};

// Done by Vignesh: Search function to look up a reservation by ID.
exports.searchBooking = (bookingId) => {
  const id = parseInt(bookingId);
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].bookingId === id) {
      return bookings[i];
    }
  }
  return null;
};
