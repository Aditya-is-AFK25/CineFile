# Movie Ticket Booking System

A beginner-friendly web application demonstrating the full software development
lifecycle using HTML, CSS, JavaScript, Node.js, and Express.js — built in phases.

## Team

- **Aditya** — Booking flow (add a new ticket)
- **Vignesh** — View & Search flow (list and search existing bookings)

## Phases

| Phase | Description |
|---|---|
| Phase 1 | UI — static HTML pages for Home, Book Ticket, View Bookings, Search Booking |
| Phase 2 | Backend business logic — `addBooking()`, `getBookings()`, `searchBooking()`, with validation rules |
| Phase 3 | Repository layer — persist bookings to `bookings.json` instead of only in memory |
| Experiment 1 | Extra validation: mandatory names, unique booking ID, seat format |
| Experiment 2 | Migrate storage from file handling to a database |
| Experiment 3 | Bootstrap integration for a responsive UI |

## Project Structure

```
public/            Phase 1 – static frontend pages
routes/            Phase 2 – Express route handlers
logic/             Phase 2 – business logic & validation rules
repository/         Phase 3 – file-based persistence (bookings.json)
db/                Experiment 2 – database version (added later)
server.js          Express app entry point
```

## Getting Started

```bash
npm install
npm start
```

Server runs at `http://localhost:3000`.
