// Done by Aditya & Vignesh: This is the entry point for our CineFile booking backend.
// We import Express and get the server up and running on port 3000.
const express = require("express");
const path = require("path");
const bookingRoutes = require("./routes/booking");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming requests with JSON payloads and URL encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the frontend static HTML/CSS files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Route requests to the booking router
app.use("/", bookingRoutes);

// Start listening for connections
app.listen(PORT, () => {
  console.log(`CineFile server is listening at http://localhost:${PORT}`);
});
