import { useState } from "react";

function ReviewForm({ onClose, onSave, editingReview }) {
    const [username, setUsername] = useState("");
    const [levelName, setLevelName] = useState("");
    const [rating, setRating] = useState(0);
  return (
    <form className="review-form">
      <h3>{editingReview ? "Edit Review" : "Add Review"}</h3>  
      {/* Input field for Name */}
      <label>Name</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      /> 
      {/* Level Dropdown */}
      <label>Level</label>
      <select
        value={levelName}
        onChange={(e) => setLevelName(e.target.value)}
        required
      >
        <option value="">Select level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>   
    {/* Input field for Ratu=ing */}
    <label>Rating</label>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}   // ⭐ convert to number
        required
      >
        <option value={0}>Select rating</option>
        <option value={1}>1 - Poor</option>
        <option value={2}>2 - Fair</option>
        <option value={3}>3 - Good</option>
        <option value={4}>4 - Very Good</option>
        <option value={5}>5 - Excellent</option>
      </select>
    </form>
  );
}

export default ReviewForm;

