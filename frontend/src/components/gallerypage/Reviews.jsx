import { useState } from "react";
import "./Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");

  /*function for adding Review */
  const addReview = () => {
    if (!text.trim()) return;
    setReviews([...reviews, { id: Date.now(), text }]);
    setText("");
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div className="review-section">
      <h3 className="review-heading"> Reviews </h3>

      <div className="review-input">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write review here"
        />
        <button className="add-button" onClick={addReview}>
          Add Review
        </button>
      </div>
      <ul className="review-list">
        {reviews.map(({ id, text }) => (
          <li key={id} className="review-item">
            <span className="review-text"> {text}</span>
            <button className="delete-button" onClick={() => deleteReview(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Reviews;
