import { useState, useEffect } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [editingId, setEditingId] = useState(null);

  function startEdit(r) {
    setAuthor(r.author);
    setComment(r.comment);
    setRating(r.rating);
    setEditingId(r.id);
  }

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  function deleteReview(id) {
    fetch("http://localhost:3000/reviews/" + id, { method: "DELETE" })
      .then(() => {
        setReviews(reviews.filter(item => item.id !== id));
      });
  }

  function addReview() {
    if (author === "" || comment === "" || rating === "") {
      return;
    }

    if (editingId !== null) {
      // the PUT code will go here (next step)
      return;
    }

    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author: author, comment: comment, rating: Number(rating) })
    })
      .then(res => res.json())
      .then(newReview => {
        setReviews([...reviews, newReview]);
        setAuthor("");
        setComment("");
        setRating("");
      });
  }

  return (
    <div>
      <h2>Reviews</h2>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment" />
      <input value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating (1-5)" />
      <button onClick={addReview}>Add</button>
      <ul>
        {reviews.map(r => (
          <li key={r.id}>
            {r.author}: {r.comment} ({r.rating}/5)
            <button onClick={() => startEdit(r)}>Edit</button>
            <button onClick={() => deleteReview(r.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;