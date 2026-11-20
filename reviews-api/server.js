const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const reviews = [
    { id: 1, author: "Ahmed", rating: 5, comment: "Great product" },
    { id: 2, author: "Sara", rating: 4, comment: "Good, but a bit slow" },
    { id: 3, author: "Saleh", rating: 3, comment: "Okay for the price" }
];

app.get("/", (req, res) => {
    res.send("Reviews API is running");
});

app.get("/reviews", (req, res) => {
    res.json(reviews);
});

app.get("/reviews/:id", (req, res) => {
    const id = Number(req.params.id);
    const review = reviews.find(r => r.id === id);

    if (!review) {
        return res.status(404).json({ message: "Review not found" });
    }

    res.json(review);
});

app.post("/reviews", (req, res) => {
    const { author, rating, comment } = req.body;

    if (!author || !rating || !comment) {
        return res.status(400).json({ message: "author, rating and comment are required" });
    }

    const newReview = { id: Date.now(), author, rating, comment };
    reviews.push(newReview);
    res.status(201).json(newReview);
});

app.delete("/reviews/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = reviews.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Review not found" });
    }

    reviews.splice(index, 1);
    res.json({ message: "Deleted" });
});


app.put("/reviews/:id", (req, res) => {
    const id = Number(req.params.id);
    const review = reviews.find(r => r.id === id);
    if (!review) {
        return res.status(404).json({ message: "Review not found" });
    }
    const { author, rating, comment } = req.body;
    review.author = author;
    review.rating = rating;
    review.comment = comment;
    res.json(review);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});