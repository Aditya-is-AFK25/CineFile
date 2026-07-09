const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "bookings.json");

// Vignesh: Phase 3 — load bookings from file (read side)
exports.loadBookings = () => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    if (!raw.trim()) {
      return [];
    }
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
};

// Aditya: Phase 3 — save bookings to file (write side)
exports.saveBookings = (bookings) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2));
  } catch (err) {
    console.error("Error saving bookings to file:", err);
  }
};
