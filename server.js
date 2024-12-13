
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("../frontend"));

// Load bookings from file
let bookings = [];

app.get("/bookings", (req, res) => {
    res.json(bookings);
});

app.post("/book", (req, res) => {
    const booking = req.body;
    bookings.push({ ...booking, id: Date.now() });
    saveBookings();
    res.sendStatus(201);
});

function saveBookings() {
    fs.writeFileSync("bookings.json", JSON.stringify(bookings, null, 2));
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
