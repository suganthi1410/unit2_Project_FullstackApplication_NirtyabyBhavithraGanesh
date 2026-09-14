import { useState } from "react";

function ReviewForm({ onClose, onSave, editingReview }) {
    const [username, setUsername] = useState("");
    const [levelName, setLevelName] = useState("");
  return (
    <form className="review-form">
      <h3>{editingReview ? "Edit Review" : "Add Review"}</h3>  
      <label>Name</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      /> 
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
    </form>
  );
}

export default ReviewForm;

