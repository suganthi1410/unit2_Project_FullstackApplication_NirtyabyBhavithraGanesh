import { useState } from "react";
function ReviewForm({ onClose, onSave, editingReview }) {
    const [username, setUsername] = useState("");
  return (
    <form className="review-form">
      <h3>{editingReview ? "Edit Review" : "Add Review"}</h3>
    </form>
  );
}

export default ReviewForm;

