# 🎥 CineFile — Curated Movie Ticket Booking Portal

CineFile is a premium, beginner-friendly web application demonstrating the complete software development lifecycle using HTML, CSS, JavaScript, Node.js, and Express.js. Built systematically in progressive development phases.

---

## 👥 Core Development Team

*   **Aditya** — Lead Developer (Booking & Capture Flows)
    *   *Responsibilities*: Built the ticket reservation pages, transaction validators, and handled the write-side repository file-saving logic.
*   **Vignesh** — Lead Developer (Search & Telemetry Logs)
    *   *Responsibilities*: Implemented the list/view summaries table, search filters, and handled the read-side repository file-loading logic.

---

## 🚀 Key Feature Milestones

### 📁 Phase 1 — Static User Interface
*   Designed responsive layout templates for index, bookings, and searches.
*   Built static routing and link navigation structures.

### 📁 Phase 2 — Express Backend Routing & Validation
*   Implemented core route handlers `addBooking()`, `getBookings()`, and `searchBooking()`.
*   Wired frontend form submissions to live backend endpoints via dynamic fetch payloads.

### 📁 Phase 3 — Repository Storage Persistence
*   Migrated runtime state from in-memory arrays to file-based local storage (`bookings.json`).
*   Created initialization handlers to preload historical reservation files on server boot.

---

## 🎨 Premium Visual Overhaul

CineFile features a high-end, responsive styling sheet styled in a **Linear-inspired Slate, Indigo & Violet** aesthetic:
*   **Auto-Toggling Color Theme**: Supports browser-level dark preference matching (`prefers-color-scheme`):
    *   *Light Mode*: Soothing warm Slate Off-White (`#f8fafc`) with subtle violet meshes.
    *   *Dark Mode*: Deep Space Obsidian (`#030712`) with rich midnight-indigo glows.
*   **Glassmorphic Design**: Layout overlays utilize frosted translucent backings (`backdrop-filter: blur(12px)`) and glowing outline boundaries.
*   **Editorial Typography**: Styled utilizing Google Fonts (`Outfit` for high-end headings and `JetBrains Mono` for metadata telemetry, tickets, and tables).
*   **Authentic Movie Stub Receipt**: Booking lookups return a perforated-edge ticket receipt complete with a simulated golden-accented barcode for authenticity.

---

## 🛠️ Project Directory Tree

```text
CineFile/
├── public/                 # Static frontend pages
│   ├── css/
│   │   └── style.css       # Premium dynamic stylesheet
│   ├── images/             # Movie poster assets
│   ├── index.html          # Portal home dashboard
│   ├── addBooking.html     # Ticket reservation form
│   ├── viewBookings.html   # Active reservations ledger
│   └── searchBooking.html  # Reservation lookup screen
├── logic/                  # Backend controller validators
├── routes/                 # Express route configurations
├── repository/             # File storage handlers (bookings.json)
├── server.js               # Express application entry point
├── package.json            # Dependencies configuration
└── README.md               # Documentation guide
```

---

## ⚡ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed locally.

### Installation
1. Install project dependencies:
   ```bash
   npm install
   ```

2. Spin up the Express server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```
